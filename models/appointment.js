const mongoose = require('mongoose');

const AppointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: 'Employee', required: true },
  service: { type: mongoose.Schema.Types.ObjectId, ref: 'Service', required: true },
  date: { type: Date, required: true },
  status: { type: String, default: 'Pendiente' } // Pendiente, Confirmada, Cancelada
}, { timestamps: true });

module.exports = mongoose.model('Appointment', AppointmentSchema);
