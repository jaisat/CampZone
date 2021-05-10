var mongoose   =  require('mongoose');
var Campground =  require('./models/campground');
var Comment    =  require('./models/comment');

var data = [
    {   
        name:"Cloud's Rest",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvfmBmGbegUyRnuIV69-ZXuyHRBUquN4IR3Q&usqp=CAU",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    {   
        name:"Desert Mesa",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ34TnmApx-R7pKjp6lSwKhlQvWfdvxIlM5NA&usqp=CAU",
        description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {   
        name:"Canayon floor",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvpcTSQDaeT8mMn0PxkcQZYnSTrB3NB9AKjA&usqp=CAU",
        description: "Bootiful Place...Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
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

