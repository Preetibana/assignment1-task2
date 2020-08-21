var express = require('express');
var instamodel=require('../modules/profile');
var router = express.Router();
//
var insta=instamodel.find({});


/* GET home page. */

router.get('/', function(req, res, next) {
	insta.exec(function(err,data)
	{
		if(err)
			throw err;
		  res.render('index', { title: 'Dhruv  Profile',records:data});
	});

});

module.exports = router;
