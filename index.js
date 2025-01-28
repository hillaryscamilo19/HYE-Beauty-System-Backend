require('dotenv').config();
const express = require('express');
const router = express.Router();
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
connectDB();

// Importar controladores correctamente
const {
    getAppointments,
    createAppointment,
    updateAppointment,
    deleteAppointment,
  } = require("./controllers/appointment");

  
  // Definir rutas
  router.get("/", getAppointments);
  router.post("/", createAppointment);
  router.put("/:id", updateAppointment);
  router.delete("/:id", deleteAppointment);
  
  module.exports = router; // ✅ Exportar el router correctamente


// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en el puerto  ${PORT}`));
