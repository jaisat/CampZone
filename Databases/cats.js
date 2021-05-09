var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/cat_app",{useNewUrlParser: true, useUnifiedTopology: true});
var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat",catSchema);

// var george = new Cat({
//     name:"Mrs. Norris",
//     age: 14,
//     temperament: "Evil"
// });
// george.save(function(err,cat){
//     if(err){
//         console.log("SOMETHING WENT WRONG!");
//     }else{
//         console.log("WE JUST SAVE A CAT");
//         console.log(cat);
//     }
// }); 

Cat.create({
    name:"Snow White",
    age: 12,
    temperament:"Nice"
},function(err,cat){
    if(err){
        console.log(err);
    }else{
        console.log(cat);
    }
});

Cat.find({},function(err,cats){
    if(err){
        console.log("Error Found!!");
        console.log(err);
    }else{
        console.log("All The Cats");
        console.log(cats);
    }
});