const express = require("express");
const session = require("express-session");
const passport = require('./passport');
const MongoStore = require('connect-mongo')(session)
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;


// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.use(passport.initialize());
app.use(passport.session()) ;// calls serializeUser and deserializeUser

// Add routes, both API and view
app.use(routes);



app.use(
  session({
  secret: 'scoooby-snacks', //pick a random string to make the hash that is generated secure
  // store: new MongoStore({ mongooseConnection: dbConnection }),
  resave: false, //required
  saveUninitialized: false //required  
})
)



app.post('/user', (req, res) => {
  console.log('user signup');
  req.session.username = req.body.username;
  req.session.
  res.end()
})

//route all traffic to react app
app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});


// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/styledb",
  {
    useNewUrlParser: true
  }
);


// Start the API server
app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
