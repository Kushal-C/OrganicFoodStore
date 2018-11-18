
// Initialize express requirements, and etc.
var createError = require('http-errors');
var express = require('express');
var session = require("express-session");
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

// Initialize routers used for database calls
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var loginRouter = require('./routes/login');
var registerRouter = require('./routes/register');
var dashboardRouter = require('./routes/dashboard');
var estimatedRouteRouter = require('./routes/estimatedRoute');
var pastOrdersRouter = require('./routes/pastOrders');
var shoppingCartRouter = require('./routes/shoppingCart');
var cartItemsRouter = require('./routes/cartItems');
var addToCartRouter = require('./routes/cartAdd');
var deleteFromCartRouter = require('./routes/cartDelete');
var logoutRouter = require('./routes/logout');

var app = express();
const port = process.env.PORT || 5000;

// Require passport for authentication
var passport = require("passport");
var flash = require("connect-flash");

require("./config/passport")(passport); // pass passport for configuration

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");


// Setup cors
app.use(cors());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader("Access-Control-Allow-Credentials", true);

    // To not save into cache
    // Implementing this to avoid 304 status codes
    res.header('Cache-Control', 'private, no-cache, no-store, must-revalidate');
    res.header('Expires', '-1');
    res.header('Pragma', 'no-cache');

    // Pass to next layer of middleware
    next();
});


app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


// Setup passport and sessions
app.use(
  session({
    secret: "secret",
    resave: true,
    saveUninitialized: true
  })
); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions
app.use(flash()); // use connect-flash for flash messages stored in session

 
// Setup routers for route calls
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/login', loginRouter);
app.use('/api/register', registerRouter);
app.use('/api/dashboard', dashboardRouter);
app.use('/estimatedroute', estimatedRouteRouter);
app.use('/pastorders', pastOrdersRouter);
app.use('/shoppingcart', shoppingCartRouter);
app.use('/cartitems', cartItemsRouter);
app.use('/cart-add', addToCartRouter);
app.use('/cart-delete', deleteFromCartRouter);
app.use('/api/logout/', logoutRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;

app.listen(port, () => console.log(`Listening on port ${port}`));
