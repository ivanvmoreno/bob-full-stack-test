const express = require('express');
const router = express.Router();
const root = require('../controllers/root');

// Endpoint /list-clients/
router.get('/list-clients', root.listClients);

// Endpoint /add-client/
router.post('/add-client', root.addClient);

// Endpoint /remove-client/
router.post('/remove-client', root.removeClient);

// Endpoint /update-client/
router.post('/update-client', root.updateClient);

// Export all routes to Express.router()
module.exports = router;