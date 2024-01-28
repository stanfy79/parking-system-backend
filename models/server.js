//Include the necessary extensions
const express = require("express");
const mongoose = require("mongoose");
const cors = require('cors');




//connecting to mongoDB
mongoose.connect("mongodb+srv://username:password/", { useNewUrlParser: true }, { useUnifiedTopology: true })
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
    fileBase64:{
        type: String,
        required: false
    },
    decodedImage:{
        type: Binary,
        required: false
})


const collection = mongoose.model("Details", newSchema);

module.exports = collection;

