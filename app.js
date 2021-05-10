var express     = require('express'),
    app         = express(), 
    bodyParser  = require("body-parser"),
    mongoose    = require('mongoose'),
    Campground  = require("./models/campground");

    mongoose.connect("mongodb://localhost/campzone",{useNewUrlParser: true, useUnifiedTopology: true});

app.use(bodyParser.urlencoded({extended:true}));
app.set("view engine","ejs");

app.get("/",function(req,res){
    res.render("landing");
}); 

app.get("/campgrounds",function(req,res){
    Campground.find({},function(err,allcampgrounds){
        if(err){
            console.log(err);
        }else{
            res.render("index",{campgrounds:allcampgrounds});
        }
    });
 });

app.post("/campgrounds",function(req,res){
    var name  = req.body.name;
    var image = req.body.image;
    var desc = req.body.description;
    var newCampground = {name: name,image:image,description:desc}
   
    Campground.create(newCampground,function(err,newlyCreated){
        if(err){
            console.log(err);
        }else{
            res.redirect("/campgrounds"); 
        }
    });
   
});
app.get("/campgrounds/new",function(req,res){
    res.render("new");
});

// SHOW--- shows more info about one campground
app.get("/campgrounds/:id",function(req,res){
    Campground.findById(req.params.id,function(err,foundCampground){
        if(err){
            console.log(err);
        }else{
            res.render("show",{campground:foundCampground});
        }
    });
});

app.listen(3000,function(){
    console.log("SERVER HAS STARTED!!");
});