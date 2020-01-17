// require('dotenv').config();
var express = require('express');
// var path = require('path');
// var favicon = require('serve-favicon');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var authenticate = require('./authenticate');
var User = require("./schema/user.js");
const request = require('request');


// database connect
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Hack:Hack123@hackday-1hwua.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser:true ,useCreateIndex:true,useUnifiedTopology:true, useFindAndModify: false });
var db = mongoose.connection;
db.on('error',console.error.bind(console, 'connection error:'));
db.once('open', function(){
 console.log('connected to db server successfully');
 });
// done

var app = express();

//passport

app.use(passport.initialize());


// view engine setup
app.use(express.static(__dirname+"/public"));
 app.set('view engine', 'ejs');


// app.use('*/js', express.static(path.join(__dirname, 'public/js')));
// app.use('*/css', express.static(path.join(__dirname, 'public/css')));
// app.use('*/media', express.static(path.join(__dirname, 'public/media')));
// app.use('*/fonts', express.static(path.join(__dirname, 'public/fonts')));

// app.use(favicon(path.join(__dirname, 'public/media/fav', 'favicon.ico')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

//Routes=================================================================================
app.get('/', function(req,res){
    console.log("index page");
    res.render("index.ejs");
});

app.get('/nearus', function(req,res){
    console.log("nearus page");
    res.render("nearus.ejs");
});

app.get('/login', function(req,res){
    console.log("login page");
    res.render("login.ejs");
});

app.get('/planetsaver', function(req,res){
    console.log("planetsaver page");
    res.render("planetsaver.ejs");
});

app.get("/results",function(req,res){
    var search_term =  req.query.search_var_of_ejs; // note
    // var url = 'http://www.omdbapi.com/?s=' + search_term +'&apikey=thewdb';
    var url = 'https://www.googleapis.com/customsearch/v1?key=AIzaSyD98gZC34YDhYUl0xLo5Utl1p7s84MsOpY&cx=000641635650089593781:dnwnsyznkib&q='+ 'eco friendly '+ search_term;
    request(url, function (error, response, body) {
        // eval(require('locus'));
      console.error('error:', error);
      console.log('statusCode:', response && response.statusCode);
      var data = JSON.parse(body);
      res.render("results.ejs",{data:data});
    });

});

//=======================================================================================

app.listen("3000",process.env.IP,function(){
	     console.log("Connected");
});