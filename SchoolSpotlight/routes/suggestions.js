const express = require('express');
const router = express.Router();
const Suggestion = require('../models/suggestion');
const auth = require('./helpers/auth');

// Suggestions index
router.get('/', (req, res) => {
  Suggestion.findById({}, 'title', (err, suggestions) => {
    console.log(suggestions);
    console.log("****************************");

    if (err) {
     console.error(err);
    } else {
     res.render('index', { suggestions: suggestions });
    }
  });
});

// Suggestions new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('suggestions/new');
});

// Suggestions show
router.get('/:id', auth.requireLogin, (req, res, next) => {
  // Room.findById(req.params.id, function(err, room) {
  // if(err) { console.error(err) };

  // Suggestion.sort({ points: -1 }).exec(function (err, suggestions) {
  //   if (err) { console.error(err) };
  //
  //   res.render('suggestions/show', { suggestion: suggestion, suggestionId: req.params.id });
  // });
});

// Suggestions create
// router.post('/', auth.requireLogin, (req, res, next) => {
router.post('/', (req, res, next) => {
  const suggestion = new Suggestion(req.body);

  suggestion.save(function(err, suggestion) {
    if(err) { console.error(err) };

    return res.redirect('/');
  });
});

router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save(function(err, user) {
    if(err) console.log(err);
    return res.redirect('/');
  });
})

module.exports = router;
