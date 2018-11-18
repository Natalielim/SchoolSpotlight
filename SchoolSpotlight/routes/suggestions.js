const express = require('express');
const router = express.Router();
const Suggestion = require('../models/suggestion');
const auth = require('./helpers/auth');

// Suggestions new
router.get('/new', auth.requireLogin, (req, res, next) => {
  res.render('suggestions/new');
});

// Suggestions show
router.get('/:id', auth.requireLogin, (req, res, next) => {
  Suggestion.findById(req.params.id).sort({ points: -1 }).exec(function (err, suggestions) {
    if (err) { console.error(err) };

    res.render('suggestions/show', { suggestions });
  });
});

// Suggestions vote
// router.post('/:id', auth.requireLogin, (req, res, next) => {
//   Suggestion.findById(req.params.id, function(err, post) {
//     post.points += parseInt(req.body.points);
//     post.save(function(err, post) {
//       if(err) { console.error(err) };
//       return res.redirect(`/`);
//     });
//   });
// });

router.post('/:id', auth.requireLogin, (req, res, next) => {
  console.log("************************");
  const suggestion = new Suggestion(req.body);

  Suggestion.findById(req.params.id).exec(function(err, suggestion) {
    suggestion.points += 1;
    console.log("***********");

    console.log(suggestion.points);

    suggestion.save(function(err, suggestion) {
      if(err) { console.error(err) };
      return res.redirect('/');
    });
  });
});

// Suggestions create
router.post('/', (req, res, next) => {
  const suggestion = new Suggestion(req.body);

  suggestion.save(function(err, suggestion) {
    if(err) { console.error(err) };
    return res.redirect('/');
  });
});

module.exports = router;
