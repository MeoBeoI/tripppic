const passport = require('passport');
const LocalStrategy = require('passport-local');
const JwtStrategy = require('passport-jwt').Strategy;
const GoogleStrategy = require('passport-google-oauth2').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const bcrypt = require('bcrypt');
const authCtrl = require('../controllers/auth.controller');

const User = require('../models/user.model');
const config = require('./config');

const localLogin = new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {
  let user = await User.findOne({ email });
  if (!user || !bcrypt.compareSync(password, user.hashedPassword)) {
    return done(null, false, { error: 'Your login details could not be verified. Please try again.' });
  }
  user = user.toObject();
  delete user.hashedPassword;
  done(null, user);
});

const jwtLogin = new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey: config.jwtSecret
}, async (payload, done) => {
  let user = await User.findById(payload._id);
  if (!user) {
    return done(null, false);
  }
  user = user.toObject();
  delete user.hashedPassword;
  done(null, user);
});

passport.use(jwtLogin);
passport.use(localLogin);

passport.use(new GoogleStrategy({
    clientID: config.googleClientId,
    clientSecret: config.googleClientSecret,
    callbackURL: "http://localhost:8080/auth/google/callback",
  }, async (accessToken, refreshToken, profile, done) => {
    let user = await User.findOne({ 'google.id': profile.id });
    let token = "";
    if (!user) {
      user = new User({
        fullname: profile.displayName,
        // TODO: CHECK EMAIL GOOGLE
        email: `${profile.id}@gmail.com`,
        provider: 'google',
        google: profile._json
      });
      user.save((err) => {
        if (err) return done(err);
        token =  authCtrl.generateToken(user);
        return done({ user, token });
      })
    } else {
      token = authCtrl.generateToken(user);
      return done({ user, token });
    }
  }
));


module.exports = passport;
