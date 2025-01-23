const express = require('express');
const router = express.Router();
const Appointment = require('../models/appointment');

// Obtener todas las citas
router.get('/', async (req, res) => {
  const appointments = await Appointment.find().populate('client employee service');
  res.json(appointments);
});

// Crear una nueva cita
router.post('/', async (req, res) => {
  const appointment = new Appointment(req.body);
  await appointment.save();
  res.status(201).json(appointment);
});

module.exports = router;
