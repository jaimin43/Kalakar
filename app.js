const express = require('express');
const expressLayouts = require("express-ejs-layouts");
const mongoose = require('mongoose');
const flash = require('connect-flash');
const session = require('express-session');
const passport = require('passport');
const app = express();

//passport config

require('./config/passport')(passport);

//config mongodb
const db = require('./config/keys').mongoURI;

//const db = "mongodb://localhost:27017/Users";//, { useNewUrlParser: true }//);
//const db = "mongodb://localhost:27017";

//connect mongo
/*function(err ,db)  old style 
 {
    if(err){
        console.log(err);    
    }else{
        console.log("Mongo Connected");
    }    
});*/
 mongoose.connect(db, { useNewUrlParser: true })
    .then(() => console.log('Mongo Connected'))
    .catch(err => console.log(err));

//ejs
app.use(expressLayouts);
app.set('view engine', 'ejs');

//bodyparser
app.use(express.urlencoded({ extended: false }));

// Express session
app.use( session({
      secret: 'secret',
      resave: true,
      saveUninitialized: true
    })
  );

 // Passport middleware
app.use(passport.initialize());
app.use(passport.session());



//flash
  app.use(flash());


  //global var
  app.use(function(req, res, next) {
    res.locals.success_msg = req.flash('success_msg');
    res.locals.error_msg = req.flash('error_msg');
    res.locals.error = req.flash('error');
    next();
  });
  

app.use("/",require('./routes/index'));
app.use("/users",require('./routes/users'));



//starting Server
const PORT =process.env.PORT || 5000;
app.listen(PORT,console.log("Server Started at 5000"));