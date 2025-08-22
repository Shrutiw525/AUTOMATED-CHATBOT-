var express = require('express');
var router = express.Router();

// Home page
router.get('/', function(req, res) {
  res.render('home', { title: 'Home' });
});

// About page
router.get('/about', function(req, res) {
  res.render('about', { title: 'About' });
});

// Query page
router.get('/query', function(req, res) {
  res.render('query', { title: 'Query' });
});

// Login page
router.get('/login', function(req, res) {
  res.render('login', { title: 'Login' });
});

module.exports = router;
