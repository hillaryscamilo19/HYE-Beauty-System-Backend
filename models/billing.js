const mongoose = require("mongoose");

const billingSchema = new mongoose.Schema({
  client: { type: mongoose.Schema.Types.ObjectId, ref: "Client" },
  services: [{ type: mongoose.Schema.Types.ObjectId, ref: "Service" }],
  total: Number,
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Billing", billingSchema);
