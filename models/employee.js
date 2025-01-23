const mongoose = require('mongoose');

const EmployeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true, required: true },
  phone: { type: String, required: true },
  role: { type: String, required: true } // Estilista, Manicurista, etc.
}, { timestamps: true });

module.exports = mongoose.model('Employee', EmployeeSchema);
