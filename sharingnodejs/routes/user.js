var express = require("express");
var mongojs = require("mongojs");
var expressVal = require("express-validator");
var parser = require("body-parser");
var router = express.Router();
var db = mongojs("textdb",["user"]);
router.post("/user",function(req,res){
	if(req.body){
		db.user.insert(req.body,function(err,result)
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

router.post("/user2",function(req,res){
	if(req.body){
		db.user.insert(req.body,function(err,result)
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
router.post("/filterUser/:roll",function(req,res){
	if(req.body){
		var form ={};
		form.roll = req.params.roll;
		db.user.find(form,function(err,result)
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
router.get("/user/:roll",function(req,res){
	var form = {};
	form.roll = req.params.roll;
	console.log(req.params.roll);
			db.user.find(form,function(err,result){
				if(err) res.status(400).send("error");
				else res.status(200).send(result);
			});
});

router.get("/user2",function(req,res){
			db.user.find({"roll":"3IST-5"},function(err,result){
				if(err) res.status(404).send("error");
				else res.status(200).send(result);
			});
});

module.exports = router;

