const express = require('express');
const router = express.Router();
const Shipment = require('../models/Shipment');

// Create a new shipment
router.post('/', async (req, res) => {
  try {
    const shipment = new Shipment(req.body);
    await shipment.save();
    res.status(201).send(shipment);
  } catch (error) {
    console.error('Error creating shipment:', error);
    res.status(400).send(error);
  }
});

// Get all shipments
router.get('/', async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).send(JSON.stringify(shipments, null, 2));
  } catch (error) {
    console.error('Error fetching shipments:', error);
    res.status(500).send(error);
  }
});

// Get a specific shipment by ID
router.get('/:id', async (req, res) => {
  try {
    const shipment = await Shipment.findById(req.params.id);
    if (!shipment) {
      return res.status(404).send();
    }
    res.status(200).send(shipment);
  } catch (error) {
    console.error('Error fetching shipment:', error);
    res.status(500).send(error);
  }
});

// Update a shipment by ID
router.patch('/:id', async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!shipment) {
      return res.status(404).send();
    }
    res.status(200).send(shipment);
  } catch (error) {
    console.error('Error updating shipment:', error);
    res.status(400).send(error);
  }
});

// Delete a shipment by ID
router.delete('/:id', async (req, res) => {
  try {
    const shipment = await Shipment.findByIdAndDelete(req.params.id);
    if (!shipment) {
      return res.status(404).send();
    }
    res.status(200).send(shipment);
  } catch (error) {
    console.error('Error deleting shipment:', error);
    res.status(500).send(error);
  }
});

module.exports = router;
