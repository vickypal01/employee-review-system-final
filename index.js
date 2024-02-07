const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const passport = require('passport');
const passportLocal = require('./config/passport-local');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongo'); // Remove (session) here
const flashMiddleware = require('./config/flashMiddleware');

// Use body-parser for parsing request bodies
app.use(bodyParser.urlencoded({ extended: false }));

// Serve static files from the "assets" directory
app.use(express.static('./assets'));

// Set up the view engine
app.set('view engine', 'ejs');
app.set('views', './views');
app.use(expressLayouts);

// Connect to your local MongoDB database using MongoDB Compass (Connect only once)
mongoose.connect('mongodb+srv://Vicky2457:Vicky27@cluster0.wrvvovj.mongodb.net/Employee?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
 
}).then(() => {
  console.log('Connected to your local MongoDB database');
}).catch((error) => {
  console.error('Error connecting to MongoDB:', error);
});

// Set up Express session
app.use(
  session({
    name: 'ERS',
    secret: 'employeeReviewSystem',
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 1000 * 60 * 100,
    },
    store: MongoStore.create({ // Initialize MongoStore without (session)
      mongoUrl: 'mongodb+srv://Vicky2457:Vicky27@cluster0.wrvvovj.mongodb.net/Employee?retryWrites=true&w=majority',
      autoRemove: 'disabled',
    }),
  })
);

// Initialize Passport and use it for user authentication
app.use(passport.initialize());
app.use(passport.session());
app.use(passport.setAuthenticatedUser);

// Use Connect flash for displaying flash messages
app.use(flash());
app.use(flashMiddleware.setFlash);

// Set up your application routes
app.use('/', require('./routes/index'));

// Start the server
app.listen(port, function (err) {
  if (err) {
    console.log('Error in running the app.');
    return;
  }
  console.log('Server is up and running at port ' + port);
});
