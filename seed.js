var mongoose   =  require('mongoose');
var Campground =  require('./models/campground');

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
            Campground.create(seed,function(err,data){
                    if(err){
                        console.log(err);
                    }else{
                        console.log("Added a Campground");
                    }
            });
         });
    });
}

module.exports = seedDB;

