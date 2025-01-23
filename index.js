require('dotenv').config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./config/database');


const app = express();
app.use(cors());
app.use(bodyParser.json());

// Conectar a MongoDB
connectDB();

// Importar rutas
app.use('/appointments', require('./routes/appointments'));
app.use('/clients', require('./routes/clients'));
app.use('/employees', require('./routes/employees'));
app.use('/services', require('./routes/services'));
app.use('/billing', require('./routes/billing'));

// Iniciar servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`));
