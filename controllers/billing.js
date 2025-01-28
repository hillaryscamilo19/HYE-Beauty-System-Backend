const Billing = require("../models/billing");

// Obtener todas las facturas
const getBills = async (req, res) => {
  try {
    const bills = await Billing.find().populate("client services");
    res.json(bills);
  } catch (error) {
    res.status(500).json({ message: "Error al obtener facturas" });
  }
};

// Crear una factura
const createBill = async (req, res) => {
  try {
    const newBill = new Billing(req.body);
    await newBill.save();
    res.status(201).json(newBill);
  } catch (error) {
    res.status(500).json({ message: "Error al generar factura" });
  }
};

// Actualizar factura por ID
const updateBill = async (req, res) => {
  try {
    const updatedBill = await Billing.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedBill);
  } catch (error) {
    res.status(500).json({ message: "Error al actualizar factura" });
  }
};

// Eliminar factura por ID
const deleteBill = async (req, res) => {
  try {
    await Billing.findByIdAndDelete(req.params.id);
    res.json({ message: "Factura eliminada" });
  } catch (error) {
    res.status(500).json({ message: "Error al eliminar factura" });
  }
};

module.exports = { getBills, createBill, updateBill, deleteBill };
