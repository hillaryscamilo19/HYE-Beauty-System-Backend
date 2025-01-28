const modeloUsuario = require("../models/User");
const bcrypt = require("bcrypt");
const { generateToken } = require("../utils/jwt-helper");

exports.register = async (req, res) => {
  console.log('hit', req.body)
  try {
    const { email, contraseña, nombre, apellido } = req.body;
   
    const usuario = await modeloUsuario.findOne({ email }); 
    
    //verifying if the user email is already in used.
    if (usuario) {
      return res.status(409).json({
        success: false,
        error: "Email already taken, please use another Email."
      });
    }
    
    const contraseñaEncriptada = await bcrypt.hash(contraseña, 10); //password encryption
    const usuarioAutenticado = new modeloUsuario({
      email,
      contraseña: contraseñaEncriptada,
      nombre,
      apellido
    });

    
    // Creamos nuevo usuario.
    await usuarioAutenticado.save();

    //user creds used for the token's creation
    const usuarioCred = {
      id: usuarioAutenticado._id,
      nombre: usuarioAutenticado.nombre,
      apellido: usuarioAutenticado.apellido,
      email: usuarioAutenticado.email
    }

    //we generate the user token
    const token = generateToken(usuarioCred);
    
    return res.status(200).json({
      exito: true,
      mensaje: "Success! Your account has been created.",
      data: {
        token,
        usuario: usuarioCred
      }
    });

  } catch (error) {
    console.log(error);
    return res.status(500).json({
      exito: false,
      mensaje: "An unexpected error occured."
    });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, contraseña } = req.body;

    //verifying if the user exists
    const usuario = await modeloUsuario.findOne({ email });
    if(!usuario){
      return res.status(409).json({
        exito: false,
        mensaje: "There is no user with that Email."
      })
    }

    //comparacion de password con el de la base de dato
    const contraCorrecta = await bcrypt.compare(contraseña, usuario.contraseña);
    if (!contraCorrecta) {
      return res.status(500).json({
        exito: false,
        mensaje: "The password is Incorrect."
      });
    }

    //user creds used for the token's creatio
    const usuarioCred = {
      id: usuario._id,
      nombre: usuario.nombre,
      apellido: usuario.apellido,
      email: usuario.email
    }

    //user token
    const token = generateToken(usuarioCred)

    return res.status(200).json({
      exito: true,
      mensaje: "Success! Now you are logged in.",
      data: {
        token,
        usuario: usuarioCred
      }
    })

  } catch (error) {
    return res.status(400).json({
      exito: false,
      mensaje: "An unexpected error occured, please try again later."
    });
  }
};