//Include the necessary extensions
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');




//connecting to mongoDB
mongoose.connect("mongodb+srv://stanfy79:pro123456@cluster0.nnapghi.mongodb.net/", { useNewUrlParser: true }, { useUnifiedTopology: true })
.then(() => {
    console.log("Connected to database")
})
.catch(() => {
    console.log("Failed")
})

// Create data Schema
const newSchema = new mongoose.Schema({
    plete:{
        type: String,
        required: true
    },
    reason:{
        type: String,
        required: true
    },
    note:{
        type: String,
        required: true
    },
    fileUrl:{
        type: String,
        required: true
    }
})


const collection = mongoose.model("Details", newSchema);

module.exports = collection;

