const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const store = require('../../store');
const { NODE_ENV } = require('../../config');
const petRouter = require('../pets/pets.router');
const peopleRouter = require('../people/people.router');
const app = express();

app.use(cors());

const morganOption = (NODE_ENV === 'production')
  ? 'tiny'
  : 'common';

app.use(morgan(morganOption));
app.use(express.json());

app.use('/people', peopleRouter);
app.use('/pets', petRouter);
app.use((err, req, res, next) => {
  console.log(err);
  if (err.status) {
    const errBody = Object.assign({}, err, { message: err.message });
    res.status(err.status).json(errBody);
  } else {
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

module.exports = app;