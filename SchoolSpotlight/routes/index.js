var express = require('express');
var router = express.Router();
const User = require('../models/user');
const Suggestion = require('../models/suggestion');

router.use(function(req, res, next) {
  res.locals.title = "School Spotlight";
  res.locals.currentUserId = req.session.userId;
  next();
});

router.get('/', function(req, res, next) {
  const currentUserId = req.session.userId;
  Suggestion.find(req.params.id).sort({ points: -1 }).exec(function (err, suggestions) {
    if (err) {
     console.error(err);
    } else {
     res.render('index', { suggestions: suggestions });
    }
  });
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', (req, res, next) => {
 User.authenticate(req.body.username, req.body.password, (err, user) => {
   if (err || !user) {
     const next_error = new Error('Username or password incorrect');
     next_error.status = 401;

     return next(next_error);
   }
   req.session.userId = user._id;

   return res.redirect('/');
 });
});

router.get('/logout', (req, res, next) => {
  if (req.session) {
    req.session.destroy((err) => {
      if (err) return next(err);
    });
  }

  return res.redirect('/login');
});

module.exports = router;
