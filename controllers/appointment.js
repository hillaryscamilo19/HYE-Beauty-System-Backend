const Appointment = require("../models/appointment");

// Obtener todas las citas
const getAppointments = async (req, res) => {
  try {
    const appointments = await Appointment.find().populate("client employee service");
    res.json(appointments);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener citas" });
  }
};

// Crear una cita
const createAppointment = async (req, res) => {
  try {
    const newAppointment = new Appointment(req.body);
    await newAppointment.save();
    res.status(201).json(newAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error al crear cita" });
  }
};

// Actualizar cita por ID
const updateAppointment = async (req, res) => {
  try {
    const updatedAppointment = await Appointment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedAppointment);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar cita" });
  }
};

// Eliminar cita por ID
const deleteAppointment = async (req, res) => {
  try {
    await Appointment.findByIdAndDelete(req.params.id);
    res.json({ message: "Cita eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar cita" });
  }
};

module.exports = { getAppointments, createAppointment, updateAppointment, deleteAppointment };
