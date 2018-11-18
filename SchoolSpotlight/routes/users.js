const express = require('express');
const router = express.Router();
const User = require('../models/user');
const auth = require('./helpers/auth')

router.get('/', (req, res) => {
 Suggestion.find({}, 'title', (err, suggestions) => {
   console.log(suggestions);
   if (err) {
     console.error(err);
   } else {
     res.render('index', { suggestions: suggestions });
   }
 });
});

router.get('/', (req, res) => {
 Room.find({}, 'topic', (err, rooms) => {
   if (err) {
     console.error(err);
   } else {
     res.render('rooms/index', { rooms });
   }
 });
});

// Users new
router.get('/new', (req, res, next) => {
  res.render('users/new')
})

// Users create
router.post('/', (req, res, next) => {
  const user = new User(req.body);

  user.save(function(err, user) {
    if(err) console.log(err);
    return res.redirect('/');
  });
})

module.exports = router;
