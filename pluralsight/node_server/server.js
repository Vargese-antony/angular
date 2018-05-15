var http = require('http');
var formidable = require('formidable');
var util = require('util');

var server = http.createServer(function(req,res){
	res.setHeader('Access-Control-Allow-Origin','*');
	res.setHeader('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Accept-Encoding, Accept-Language');

	if(req.method.toLowerCase() == 'post') {
		processForm(req,res);
		return;
	}
	res.end();
});

function processForm(req,res) {
	var form = new formidable.IncomingForm();

	form.parse(req, function(err, fields){
		res.writeHead(500,{
			'content-type': 'text/json'
		});
		var data = JSON.stringify({
			fields : fields
		});

		res.end(data);

		console.log('Posted fields');
		console.log(data);
	});
}

var port = 4300;
server.listen(port);
console.log('Server is listening on port : ' + port);