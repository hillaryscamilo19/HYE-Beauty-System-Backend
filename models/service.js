const mongoose = require('mongoose');

const ServiceSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true } // Duración en minutos
}, { timestamps: true });

module.exports = mongoose.model('Service', ServiceSchema);
