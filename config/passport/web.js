const bcrypt = require('bcrypt-nodejs');
const passport = require('passport');
const { Strategy: LocalStrategy } = require('passport-local');

const { User } = require('../../models');

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then(user => done(null, user.dataValues))
    .catch(error => done(error));
});

/**
 * Sign in using username and password
 */
passport.use(new LocalStrategy({
  usernameField: 'username',
  passwordField: 'password',
  passReqToCallback: true,
  session: true,
}, async (req, username, password, done) => {
  try {
    const user = await User.findOne({ where: { username } });
    if (!user) {
      throw Error('Username tidak ditemukan');
    }

    const result = bcrypt.compareSync(password, user.password);
    if (!result) {
      throw Error('Username atau password salah');
    }

    return done(null, user);
  } catch (error) {
    if (typeof error === 'string' || error instanceof String) {
      return done(null, false, { msg: error });
    }
    return done(null, false, { msg: error.message });
  }
}));

/**
 * Login Required middleware.
 */
exports.isAuthenticated = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/login');
};

/**
 * Authorization Required middleware.
 */
// exports.isAuthorized = (req, res, next) => {
//   const provider = req.path.split('/').slice(-1)[0];
//   const token = req.user.tokens.find(token => token.kind === provider);
//   if (token) {
//     next();
//   } else {
//     res.redirect(`/auth/${provider}`);
//   }
// };
