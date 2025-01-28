const Client = require("../models/client");

// Obtener todos los clientes
const getClients = async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener clientes" });
  }
};

// Crear un cliente
const createClient = async (req, res) => {
  try {
    const newClient = new Client(req.body);
    await newClient.save();
    res.status(201).json(newClient);
  } catch (error) {
    res.status(500).json({ message: "Error al crear cliente" });
  }
};

module.exports = { getClients, createClient };
