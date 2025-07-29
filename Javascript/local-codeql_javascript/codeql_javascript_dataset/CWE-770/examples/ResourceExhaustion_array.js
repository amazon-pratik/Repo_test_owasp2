//{fact rule=resource-leak@v1.0 defects=1}

var http = require("http"),
    url = require("url");

var server = http.createServer(function(req, res) {
	var size = parseInt(url.parse(req.url, true).query.size);

	let dogs = new Array(size).fill("dog"); // BAD

	// ... use the dog
});

//{/fact}
