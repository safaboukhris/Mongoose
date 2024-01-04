const mongoose = require("mongoose");
// @creation person schema
const personSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: false
    },
    age:{
        type: Number
    },
    favoriteFoods:{
        type:[String]
    },
    isVegetarian :{
        type: Boolean
    }
});
module.exports = mongoose.model("person",personSchema);

