const express = require('express');
const router = express.Router();
const Vehicle = require('../models/Vehicle');

// Create a new vehicle
router.post('/', async (req, res) => {
  try {
    const vehicle = new Vehicle(req.body);
    await vehicle.save();
    res.status(201).send(vehicle);
  } catch (error) {
    console.error('Error creating vehicle:', error);
    res.status(400).send(error);
  }
});

// Get all vehicles
router.get('/', async (req, res) => {
  try {
    const vehicles = await Vehicle.find();
    res.status(200).send(vehicles);
  } catch (error) {
    console.error('Error fetching vehicles:', error);
    res.status(500).send(error);
  }
});

// Get a specific vehicle by ID
router.get('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findById(req.params.id);
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    console.error('Error fetching vehicle:', error);
    res.status(500).send(error);
  }
});

// Update a vehicle by ID
router.patch('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    console.error('Error updating vehicle:', error);
    res.status(400).send(error);
  }
});

// Delete a vehicle by ID
router.delete('/:id', async (req, res) => {
  try {
    const vehicle = await Vehicle.findByIdAndDelete(req.params.id);
    if (!vehicle) {
      return res.status(404).send();
    }
    res.status(200).send(vehicle);
  } catch (error) {
    console.error('Error deleting vehicle:', error);
    res.status(500).send(error);
  }
});

module.exports = router;