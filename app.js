const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const shipmentsRouter = require('./routes/shipments');
const vehiclesRouter = require('./routes/vehicles');

const app = express();
app.use(express.json());

// Conexión a MongoDB
mongoose.connect('mongodb://localhost:27017/Transport_logistics', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
  });

// Rutas para shipments y vehicles
app.use('/api/shipments', shipmentsRouter);
app.use('/api/vehicles', vehiclesRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on  http://localhost:3000/api/vehicles and http://localhost:3000/api/shipments`);
});
