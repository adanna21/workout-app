const passport = require('passport');
const Player = require('../../models/Player');

module.exports = () => {

  passport.serializeUser((user, done) => {
    done(null, user.username);
  });

  passport.deserializeUser((username, done) => {
    User.findByUsername(username)
      .then(user => {
        done(null, user);
      }).catch(err => {
        done(err, null);
      });
  });
};
