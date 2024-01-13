const mongoose = require("mongoose");

const BookSchema = mongoose.Schema({
    title: String,
    author:String,
    createdAt:{
        type:Date,
        default:Date.now
    }

})

module.exports  = mongoose.model('Book', BookSchema );