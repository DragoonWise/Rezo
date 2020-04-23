const express = require('express');
const router = express.Router();

module.exports = () => {
    const customers = require('../models/customers.js');

    // Create a new customer
    router.post('/customers', customers.create);

    // Retrieve all customers
    router.get('/customers', customers.findAll);

    // Retrieve a single customer with email
    router.get('/customers/email/:email', customers.findOneByEmail);

    // Retrieve a single customer with customerId
    router.get('/customers/:customerId', customers.findOne);

    // Update a customer with customerId
    router.put('/customers/:customerId', customers.update);

    // Delete a customer with customerId
    router.delete('/customers/:customerId', customers.delete);
}