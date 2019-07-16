exports.getLogin = (req, res) => {
  if (req.user) {
    return res.redirect('/');
  }
  res.render('pages/login', {
    title: 'Login'
  });
};