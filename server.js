var http = require('http');
var fs=require("fs");

var path=require("path");
http.createServer(function (req, res) {
	if(req.url==="/")
	{
	fs.readFile("./public/index.html","UTF-8",function(err,html)
	{
		  res.writeHead(200, {'Content-Type': 'text/html'});
   //res.write("response at",+req.url+"<br/>");
  res.end(html);
	});
	}
	else if(req.url.match("\.css$"))
	{
		var cssPath=path.join(__dirname,'public',req.url);
		var fileStream =fs.createReadStream(cssPath,"UTF-8");
		res.writeHead(200, {'Content-Type': 'text/css'});
		fileStream.pipe(res);
	}else if(req.url.match("\.jpg|.png$"))
	{
		var imagePath=path.join(__dirname,'public',req.url);
		var fileStream =fs.createReadStream(imagePath);
		res.writeHead(200, {'Content-Type': 'image/jpg'});
		fileStream.pipe(res);
	}
	else		
		{
			res.writeHead(400, {'Content-Type': 'text/html'});
   //res.write("response at",+req.url+"<br/>");
            res.end("no page found");
		}
	
console.log(req.url);
}).listen(8080);