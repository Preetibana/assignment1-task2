var http = require('http');
var fs=require("fs");
var MongoClient=require("mongodb").MongoClient;
var url="mongodb://localhost:27017/college";
var path=require("path");
http.createServer(function (req, res) {
	MongoClient.connect(url,function(err,db)
	{
		
	if(err)
		throw err;
	var dbo = db.db("college");
	dbo.collection("student").find({}).toArray(function(err,result)
		{
	if(err)
		throw err;
	res.writeHead(200,{"Content-type":"text/html"});
	var obj=result;
	res.end("<h1>"+obj[0].dname+"</h1>");
	//res.end(obj[0].dname);
	
		});
	});
}).listen(8080);