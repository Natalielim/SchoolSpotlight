var express = require('express');
var router = express.Router();
const User = require('../models/user');

router.use(function(req, res, next) {
  res.locals.title = "School Spotlight";
  res.locals.currentUserId = req.session.userId;
  next();
});

router.get('/', function(req, res, next) {
  const currentUserId = req.session.userId;
  res.render('index');
});

router.get('/login', function(req, res, next) {
  res.render('login');
});

router.post('/login', function(req, res, next) {
  res.redirect('/');
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
