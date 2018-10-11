var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();

var db = mongojs("EnrollmentDb",["Students"]);

router.post("/students",function(req,res){
	if(req.body){
		db.Students.insert(req.body,function(err,result)
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


router.get("/students/:course",function(req,res){
		var form={};
		form.Course = req.params.course;
			db.Students.find(form,function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});

router.get("/students",function(req,res){
		
			db.Students.find({},function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});

router.delete("/students",function(req,res){

	if(req.body){
		//mongo db
		db.Students.remove(req.body,function(err,result){
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

