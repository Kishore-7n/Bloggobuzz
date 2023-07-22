const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const blogschema = new Schema({
    title:{
        type:String,
        required:true,
    },
    
    snippet:{
        type:String,
        required:true,
    },

    author:{
        type:String,
        required:true,
    },

    Description:{
        type:String,
        required:true,
    },

    image:{
        type:String,
        required:true
    },

},{timestamps:true}
);

const blog = mongoose.model("blog",blogschema);
module.exports = blog;