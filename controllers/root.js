const Client = require('../models/Client');

// Controller for endpoint /add-client/
exports.addClient = (req, res) => {
    // Create client based on imported Client model
    const newClient = new Client({
        name: req.body.name,
        bags: req.body.bags,
        contactInfo: {
            email: (req.body.email != undefined ? req.body.email : null)
        }
    });

    // Save the new client to the DB
    newClient.save(err => {
        if (err) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    })
};

// Controller for endpoint /list-clients/
exports.listClients = (req, res) => {
    // Query and return full customers list
    Client.find({}, (err, clients) => {
        if (err) {
            res.sendStatus(500);
        }
        res.send(clients);
    });
};

// Controller for endpoint /update-client/
exports.updateClient = (req, res) => {
    Client.findOne({ name: { $regex: req.body.name, $options: 'i' } }, (err, client) => {
        if (err) {
            throw new Error(err);
        }

        // Check for new data passed in
        if (req.body.newData.name != undefined) client.name = req.body.newData.name;
        if (req.body.newData.bags != undefined) client.bags = req.body.newData.bags;
        if (req.body.newData.contactInfo.email != undefined) client.contactInfo.email = req.body.newData.contactInfo.email;
        
        // Save new customer information to the DB
        client.save();
        res.sendStatus(200);
    });
};

// Controller for endpoint /remove-client/
exports.removeClient = (req, res) => {
    Client.findOne({ name: { $regex: req.body.name, $options: 'i' } }, (err, client) => {
        if (err) {
            throw new Error(err);
        }

        // Remove client from DB
        client.remove();
        res.sendStatus(200);
    });
};