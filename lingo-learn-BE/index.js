// app.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dbConnect = require('./config/database');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const authRoutes = require('./routes/auth/authRoutes');
const googleAuthRoutes = require('./routes/auth/googleAuthRoutes');
const imageDescRoutes = require('./routes/imageDesc');
const Spanish_Quiz=require('./routes/Spanish_Quiz')


const port = process.env.PORT;
const app = express();

// Database connection
dbConnect();

// Middleware setup
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser('secretcode')); // Same as used in express-session
app.use(
  session({
    secret: 'secretcode',
    resave: true,
    saveUninitialized: true,
  })
);
app.use(
  cors({
    origin: 'http://localhost:3000', // Location of the React app
    credentials: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
require('./config/passportConfig')(passport);

// Simple Login/Register authentication routes
app.use('/auth', authRoutes);

// Google authentication routes
app.use('/auth/google', googleAuthRoutes);

app.get('/user', (req, res) => {
  res.send(req.user); // The req.user stores the entire user that has been authenticated inside of it.
});

app.use('/api',imageDescRoutes);
app.use('/api',Spanish_Quiz);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


