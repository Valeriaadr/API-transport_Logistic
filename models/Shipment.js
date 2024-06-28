const mongoose = require('mongoose');

const shipmentSchema = new mongoose.Schema({
    tracking_number: { type: String, required: true },
    ship_date: { type: Date, required: true },
    estimated_delivery_date: { type: Date, required: true },
    origin_address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postal_code: { type: String, required: true },
        country: { type: String, required: true }
    },
    destination_address: {
        street: { type: String, required: true },
        city: { type: String, required: true },
        state: { type: String, required: true },
        postal_code: { type: String, required: true },
        country: { type: String, required: true }
    },
    status: { type: String, required: true },
    service_type: { type: String, required: true },
    package: {
        weight: { type: String, required: true },
        dimensions: {
            length: { type: String, required: true },
            width: { type: String, required: true },
            height: { type: String, required: true }
        },
        content_description: { type: String, required: true },
        declared_value: { type: String, required: true }
    },
    customers: [{
        name: { type: String, required: true },
        type: { type: String, required: true },
        contact: {
            phone: { type: String, required: true },
            email: { type: String, required: true }
        }
    }],
    recipient_info: {
        name: { type: String, required: true },
        contact: {
            phone: { type: String, required: true },
            email: { type: String, required: true }
        },
        signature: { type: String, required: true }
    },
    tracking: {
        gps_location: {
            latitude: { type: String, required: true },
            longitude: { type: String, required: true }
        }
    },
    financial: {
        shipping_cost: { type: String, required: true },
        payment_method: { type: String, required: true }
    }
});

const Shipment = mongoose.model('Shipment', shipmentSchema);

module.exports = Shipment;
