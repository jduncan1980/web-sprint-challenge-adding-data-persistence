const express = require('express');
const logger = require('./middleware/logger');
const projectsRouter = require('./api/projectsRouter');
const server = express();

server.use(express.json());
server.use(logger());
server.use('/api', projectsRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({ message: 'Something went wrong, try again...' });
});

module.exports = server;
