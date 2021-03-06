const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const registerRouter = require('../controllers/register');
const loginRouter = require('../controllers/login');
const usersRouter = require('../controllers/users');
const postsRouter = require('./routes/postsRouter');

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());
server.use('/api/register', registerRouter);
server.use('/api/login', loginRouter);
server.use('/api/users', usersRouter);
server.use('/posts', postsRouter);

server.get('/', (req, res) => {
  res.status(200).json({ message: 'API is Up' });
});

module.exports = server;
