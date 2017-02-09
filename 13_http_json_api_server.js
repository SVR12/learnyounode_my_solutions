// Program to serve JSON data to GET request
const http = require('http') // to get http module from Node core library
// need to install 'through2-map' module using 'npm install through2-map' (you need to install this in same folder where your .js program file is)
var url = require('url') // to get url module from Node core library

function parsetime(time){	// first endpoint
	return {
		hour: time.getHours(),
		minute: time.getMinutes(),
		second: time.getSeconds()
	}
}

function unixtime(time){	// second endpoint
	return {unixtime: time.getTime()}
}

var server = http.createServer(function(request,response){	// new instance of http server
	var parsedUrl = url.parse(request.url, true)	// parse content of 'request.url' and returns object with various URL properties
	var time = new Date(parsedUrl.query.iso)	// creates an ISO date object
	var result

	if(/^\/api\/parsetime/.test(request.url)){	// to check for first endpoint
		result = parsetime(time)
	}else if(/^\/api\/unixtime/.test(request.url)){	// to check for second endpoint
		result = unixtime(time)
	}

	if(result){
		response.writeHead(200, { 'Content-Type': 'application/json'}) // setting the 'Content-Type' as mentioned in task
		response.end(JSON.stringify(result))	// writing 'result' in response stream returned in 'end' event
	}else{
		response.writeHead(404) // 404 is standard code in http for Not Found error message
		response.end()	// end event
	}
})
server.listen(Number(process.argv[2]))	// server listening at port number provided as first command-line argument