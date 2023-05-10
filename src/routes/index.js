const express = require('express');

const router = express.Router();

const connect = require('../db/index');

router.post('/api/login', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Hello world' });
});

router.post('/api/registration', (req, res) => {
  console.log(req.body);
  res.send({ message: 'Hello world' });
});

module.exports = router;
