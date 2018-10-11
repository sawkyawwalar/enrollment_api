var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();

var db = mongojs("EnrollmentDb",["Class"]); //database connection

router.post("/class",function(req,res){
	if(req.body){
		db.Class.insert(req.body,function(err,result)
{
	if(err){ res.status(404).send("error");
				console.log("Error");
}
	else {res.status(200).send(result);
				console.log("ok");
	}
}
			);
	}

}


	);


router.get("/class",function(req,res){
	
			db.Class.find({},function(err,result){
				if(err) res.status(400).send("error");
				else res.status(200).send(result);
			});
});

router.delete("/class",function(req,res){

	if(req.body){
		//mongo db
		db.Class.remove(req.body,function(err,result){
		if(err){ 
		res.status(404).send("error");
				console.log("Error");
			}
		else {
		res.status(200).send(result);
				console.log("ok");
			}
		}
			);
	}
	

}


	);
module.exports = router;

