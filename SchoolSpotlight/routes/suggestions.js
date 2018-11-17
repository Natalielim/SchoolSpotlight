const express = require('express');
const router = express.Router();
const Suggestion = require('../models/suggestion');
const auth = require('./helpers/auth');

// Suggestions index
router.get('/', (req, res, next) => {
  // TODO
});

// Suggestions new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('rooms/new');
});

// Suggestions show
router.get('/:id', auth.requireLogin, (req, res, next) => {
  // TODO
});

// Suggestions create
router.post('/', auth.requireLogin, (req, res, next) => {
  // TODO
});

module.exports = router;
