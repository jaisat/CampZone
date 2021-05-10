var mongoose   =  require('mongoose');
var Campground =  require('./models/campground');
var Comment    =  require('./models/comment');

var data = [
    {   
        name:"Cloud's Rest",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfmBmGbegUyRnuIV69-ZXuyHRBUquN4IR3Q&usqp=CAU",
        description: "blah blah blah"
    },
    {   
        name:"Desert Mesa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34TnmApx-R7pKjp6lSwKhlQvWfdvxIlM5NA&usqp=CAU",
        description: "blah blah blah I'm in"
    },
    {   
        name:"Canayon floor",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpcTSQDaeT8mMn0PxkcQZYnSTrB3NB9AKjA&usqp=CAU",
        description: "Bootiful Place..."
    }
];
function seedDB(){
    // remove all campground
    Campground.remove({},function(err){
        if(err){
            console.log(err);
        }
        console.log("Removed Campgrounds");
             // add campgrounds
        data.forEach(function(seed){
            Campground.create(seed,function(err,campground){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added a Campground");
                        Comment.create(
                            {
                                text:"This is great place,but I wish there was internet",
                                author:"Homer"
                            },function(err,comment){
                                if(err){
                                    console.log(err);
                                }else{
                                    campground.comments.push(comment);
                                    campground.save();
                                    console.log("Created new Comment"); 
                                }
                            });
                    }
            });
         });
    });
}

module.exports = seedDB;

