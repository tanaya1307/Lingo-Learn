const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/user'); 
const bcrypt = require('bcrypt');
const localStrategy = require('passport-local').Strategy;
const { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } = process.env;

module.exports = function (passport) {
  // Local Strategy
  passport.use(
    new localStrategy(async (username, password, done) => {
      try {
        const user = await User.findOne({ username: username });

        if (!user) {
          return done(null, false); // User not found
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
          return done(null, user); // Authentication successful
        } else {
          return done(null, false); // Authentication failed
        }
      } catch (err) {
        return done(err); // Pass the error to done
      }
    })
  );

  // Google Strategy
  passport.use(
    new GoogleStrategy(
      {
        clientID: GOOGLE_CLIENT_ID,
        clientSecret: GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
      },
      async (_, __, profile, done) => {
        try {
          const doc = await User.findOne({ googleId: profile.id });

          if (!doc) {
            const newUser = new User({
              googleId: profile.id,
              username: profile.name.givenName,
            });

            await newUser.save();
            return done(null, newUser);
          }

          return done(null, doc);
        } catch (err) {
          return done(err, null);
        }
      }
    )
  );

  passport.serializeUser((user, cb) => {
    cb(null, user.id);
  });

  passport.deserializeUser(async (id, cb) => {
    try {
      const user = await User.findOne({ _id: id });

      if (!user) {
        return cb(null, false); // User not found
      }

      const userInformation = {
        username: user.username,
      };

      cb(null, userInformation);
    } catch (err) {
      return cb(err); // Pass the error to cb
    }
  });
};

