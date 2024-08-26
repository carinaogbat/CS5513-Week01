// Use this workspace to submit your homework for Week 1: Assignment 2: Git + GitHub Basics


let myhttp = require('http');

let myServer = myhttp.createServer(
	function(myRequest, myResponse) {
		console.log(myRequest.url);

		myResponse.writeHead(
			200, 
			{
				"Content-Type": "text/plain"
			}
		);
		myResponse.end("Hello fellow cat lover")
	}
);

myServer.listen(80, "0.0.0.0");