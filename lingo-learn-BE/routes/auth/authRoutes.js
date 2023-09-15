// authRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');
const User = require('../../models/user');

// Simple Login route
router.post('/login', (req, res, next) => {
  // ... Authentication logic ...
  passport.authenticate("local", (err, user, info) => {
    if (err) throw err;
    if (!user) res.send("No User Exists");
    else {
      req.logIn(user, (err) => {
        if (err) throw err;
        res.send("Successfully Authenticated");
        console.log(req.user);
      });
    }
  })(req, res, next);
});

// Register route
router.post('/register', async (req, res) => {
  // ... Registration logic ...
  try {
    const existingUser = await User.findOne({ username: req.body.username }).exec();

    if (existingUser) {
      res.send("User already exists");
    } else {
      const hashedPassword= await bcrypt.hash(req.body.password,10);
      const newUser = new User({
        username: req.body.username,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    }
  } catch (err) {
    res.status(500).send("Internal Server Error");
  }
});

router.delete('/logout', (req, res) => {
  if (req.session) {
    req.session.destroy(err => {
      if (err) {
        res.status(400).send('Unable to log out')
      } else {
        res.send('done')
      }
    });
  } else {
    res.end()
  }
})
module.exports = router;
