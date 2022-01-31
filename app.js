require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require('mongoose');
const session = require('express-session')
const passport = require('passport');
const passportLocalMongoose = require('passport-local-mongoose');
const app = express();

app.set('view engine', 'ejs');

app.use(session({
  secret: 'our little secret.',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: true }
}))

mongoose.connect("mongodb://localhost:27017/userDB",{useNewUrlParser: true});

const userSchema= new mongoose.Schema({
  email: String,
  password: String
});


const User = new mongoose.model("User",userSchema);

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));

app.get("/",function(req,res){
  res.render("home")
})
app.get("/login",function(req,res){
  res.render("login")
})
app.get("/register",function(req,res){
  res.render("register")
})
app.post("/register",function(req,res){



})
app.post("/login",function(req,res){

})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
