var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();

var db = mongojs("EnrollmentDb",["Admin"]);

router.post("/admin",function(req,res){
	if(req.body){
		db.Admin.insert(req.body,function(err,result){
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


router.get("/admin",function(req,res){
			db.Admin.find({},function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});
//Delete Admin
router.delete("/admin",function(req,res){

	if(req.body){
		//mongo db
		db.Admin.remove(req.body,function(err,result){
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

