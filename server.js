const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const Friend = require('./Friends/FriendModel');

const server = express();

server.use(helmet());
server.use(cors());
server.use(bodyParser.json());



mongoose
  .connect('mongodb://localhost/friends')
  .then(db => {
    console.log(`Connected to the ${db.connections[0].name} database`);
  })
  .catch(error => {
    console.error('DB connection failed')
  });

  const PORT = 5005;
  server.listen(PORT, () => {
    console.log(`API running on http://localhost:${PORT}.`);
  });