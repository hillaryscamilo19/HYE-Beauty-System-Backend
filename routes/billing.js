const mongoose = require('mongoose');

const BillingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: 'Client', required: true },
  appointment: { type: mongoose.Schema.Types.ObjectId, ref: 'Appointment', required: true },
  totalAmount: { type: Number, required: true },
  paymentMethod: { type: String, required: true }, // Tarjeta, Efectivo, Transferencia
  status: { type: String, default: 'Pendiente' } // Pagado, Pendiente
}, { timestamps: true });

module.exports = mongoose.model('Billing', BillingSchema);
