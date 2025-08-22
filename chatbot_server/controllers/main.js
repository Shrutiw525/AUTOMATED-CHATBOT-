// controllers/main.js

exports.index = (req, res) => {
  res.render('index', { title: 'Home' });
};

exports.about = (req, res) => {
  res.render('about', { title: 'About' });
};

exports.query = (req, res) => {
  res.render('query', { title: 'Query' });
};

exports.login = (req, res) => {
  res.render('login', { title: 'Login' });
};
