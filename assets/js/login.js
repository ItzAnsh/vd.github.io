const express = require("express");
const path = require("path");
const app = express();
const mongoose = require('mongoose');
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost:27017/login');
}
const bodyparser = require("body-parser");

const loginSchema = new mongoose.Schema({
    email: String,
    pass: String
  });
  
const login = mongoose.model('login', loginSchema);

app.post('/login', (req, res)=>{
    var myData = new Login(req.body);
    myData.save().then(()=>{
    res.send("This item has been saved to the database")
    }).catch(()=>{
    res.status(400).send("item was not saved to the databse")
})
})
