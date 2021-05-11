var express       = require('express'),
    app           = express(), 
    bodyParser    = require("body-parser"),
    mongoose      = require('mongoose'),
    passport      = require('passport'),
    LocalStrategy = require('passport-local'),
    Campground    = require("./models/campground"),
    Comment       = require("./models/comment"),
    User          = require("./models/users"),
    seedDB        = require("./seed");

// requiring routes 
var commentRoutes    = require('./routes/comments'),
    campgroundRoutes = require('./routes/campgrounds'),
    indexRoutes       = require('./routes/index');

seedDB();
mongoose.connect("mongodb://localhost/campzone",{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");
app.use(express.static(__dirname+"/public"));

// --PASSPORT CONFIG--
app.use(require("express-session")({
    secret : "I can be the best",
    resave : false,
    saveUninitialized : false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use(function(req,res,next){
    res.locals.currentUser = req.user;  
    next();
});

app.use("/campgrounds/:id/comments",commentRoutes);
app.use("/campgrounds",campgroundRoutes);
app.use("/",indexRoutes);


app.listen(3000,function(){
    console.log("SERVER HAS STARTED!!");
});