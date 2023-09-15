// googleAuthRoutes.js
const express = require('express');
const router = express.Router();
const passport = require('passport');

// Google authentication routes
router.get('/', passport.authenticate('google', { scope: ['profile'] }));

router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: 'http://localhost:3000', // Failure redirect URL
    session: true,
  }),
  function (req, res) {
    res.redirect('http://localhost:3000'); // Successful authentication redirect URL
  }
);

module.exports = router;
