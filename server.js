'use strict';

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes/root.js');
const cors = require('cors')

const app = express();

// Test DB connection
mongoose.connect('mongodb://@ds143893.mlab.com:43893/bob-test', {
        useNewUrlParser: true,
        auth: {
            user: 'test',
            password: 'test123'
        }
    })

// Bind mongoose error to console
mongoose.connection.on('error', console.error.bind('console', 'Connection error (mongoose): '))

// CORS
app.use(cors({ credentials: true, origin: true }))

// Express with body-parser 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

// Endpoints from /routes/root.js
app.use(routes);

app.listen(5555);