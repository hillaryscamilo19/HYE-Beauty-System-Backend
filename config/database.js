const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    console.log("✅ MongoDB conectado correctamente");
    await mongoose.connect(process.env.MONGO_URI, {}); // ❌ Elimina las opciones obsoletas
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
    process.exit(1); // Detiene la ejecución si falla la conexión
  }
};

module.exports = connectDB;
