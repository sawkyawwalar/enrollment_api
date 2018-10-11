var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
//daabase
var db = mongojs("EnrollmentDb",["Admin"]);

//ARC
router.post("/login",function(req,res){
	
	if(req.body){
		//mongo db
		db.Admin.find(req.body,function(err,result){
			if(err){ 
				res.status(404).send("error");
				console.log("Errorrrrr");
			}
			else {
				res.status(200).send(result);
				console.log("Login Successful");
			}
		});
	}
	
}


	);

module.exports = router;

