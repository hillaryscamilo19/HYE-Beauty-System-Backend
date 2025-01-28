const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  employee: { type: mongoose.Schema.Types.ObjectId, ref: "Employee" },
  service: { type: mongoose.Schema.Types.ObjectId, ref: "Service" },
  date: { type: Date, required: true },
  status: { type: String, default: "pending" },
});

module.exports = mongoose.model("Appointment", appointmentSchema);
