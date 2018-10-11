var express = require("express");
var mongojs = require("mongojs");
var cors = require('cors');
var expressVal = require("express-validator");
var parser = require("body-parser");
var c = require ("./routes/class.js");
var a = require ("./routes/admin.js");
var s = require ("./routes/student");
var l = require ("./routes/login");
var app = express();
app.use(function(req,res,next)
	{
		res.set("Access-Control-Allow-Origin","*");
		next();
	});
app.use(parser.json());
app.use(parser.urlencoded({
extended:true
}));
app.options('*',cors());
app.use(cors());

app.use(c);
app.use(a);
app.use(s);
app.use(l);

app.listen(8000,
function(){
console.log("Listen at 8000");
}
	);
