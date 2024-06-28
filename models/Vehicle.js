const mongoose = require('mongoose');

const vehicleSchema = new mongoose.Schema({
  vehicle_id: { type: String, required: true },
  status: { type: String, required: true },
  route: { type: String, required: true },
  driver_info: {
    name: { type: String, required: true },
    contact: { type: String, required: true }
  },
  tracking_numbers: [{ type: String, required: true }]
});

const Vehicle = mongoose.model('Vehicle', vehicleSchema);

module.exports = Vehicle;
