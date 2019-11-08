const express = require('express');

const DataRouter = require('./data/db-router');

const server = express();

server.use(express.json());

server.use('/api/posts', DataRouter);

server.get('/', (req, res) =>{
    res.send(`
        <h2>Web API II Challenge</h2>        
        `);
});

module.exports = server;
