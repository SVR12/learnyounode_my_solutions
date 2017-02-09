// Program to create http server that receives only POST requests and converts incoming POST requests body characters to upper-case and return it to the client
// listening port to server provided by first command-line argument

const http = require('http')	// to get http module from Node core library
// need to install 'through2-map' module using 'npm install through2-map' (you need to install this in same folder where your .js program file is)
var map = require('through2-map') // to get through2-map module from Node core library

var server = http.createServer(function(request,response){	// new instance of http server
	if(request.method != 'POST'){	// to check if the request method used by client is 'POST' or not since we have to process'POST' requests only
		return response.end('request method not POST\n')
	}
	request.pipe(map(function(chunk){ // piping data from 'request' stream
		return chunk.toString().toUpperCase() // conerting the data object returned from request into string(using 'toString()' method) and converting string to uppercase(using '.toUpperCase' method)
	})).pipe(response)	//piped data from request to 'response' stream
})
server.listen(Number(process.argv[2]))	// server listening on port provided as first command-line argument