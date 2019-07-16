exports.getWelcome = (req, res) => {
  res.render('pages/welcome', {
    title: 'Welcome'
  });
};