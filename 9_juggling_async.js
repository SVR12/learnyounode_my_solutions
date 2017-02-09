// Program to print data streamed from 3 different URLs provided as command-line argument
// the URLs might not stream all the content sequentially

const http = require('http') // to get http module from Node core library
var info1 = [] // empty array to store the data streamed from URL1
var info2 = [] // empty array to store the data streamed from URL2
var info3 = [] // empty array to store the data streamed from URL3

// the code is similar to the code of http_collect task, the only difference being various instances of data streaming functions are embedded into each other
// my code is simple in terms that the module will collect and print data from 2nd URL only after collecting all data from 1st URL and printing it
// it will then collect and print data from 3rd URL only after collecting all data from 2nt URL and printing it
// But here the trade off is of time, without any mention of time limit in task it is acceptable solution but not optimized.

// 1st URL code starts here
http.get(process.argv[2], function(response){
	response.setEncoding('utf8')	// set encoding on output so we don't need to convert buffer object into string later while printing it to console(stdout)
	response.on('data', function(input){
		info1.push(input) // append data from URL1 in info1 array
	})
	response.on('error', console.error)
	response.on('end', function(){
		output = info1.join("")
		console.log(output)
		// 2nd URL code starts here only when data from 1st URL is streamed and printed on console(stdout)
		http.get(process.argv[3], function(response){
			response.setEncoding('utf8')	// set encoding on output so we don't need to convert buffer object into string later while printing it to console(stdout)
			response.on('data', function(input){
				info2.push(input) // append data from URL2 in info2 array
			})
			response.on('error', console.error)
			response.on('end', function(){
				output = info2.join("")
				console.log(output)
				// 3rd URL code starts here only when data from 2nd URL is streamed and printed on console(stdout)
				http.get(process.argv[4], function(response){
					response.setEncoding('utf8')	// set encoding on output so we don't need to convert buffer object into string later while printing it to console(stdout)
					response.on('data', function(input){
						info3.push(input) // append data from URL3 in info3 array
					})
					response.on('error', console.error)
					response.on('end', function(){
						output = info3.join("")
						console.log(output) // data streamed from 3rd URL is printed on console(stdout)
					})	
				}) //3rd URL code ends here
			})		
		}) // 2nd URL code ends
	})
}) // 1st URL code ends here


// learnyounode original solution
/*
var http = require('http') // to get http module from Node core library
var bl = require('bl')	// to get bl(Buffer List) from Node core library, remember bl package should be installed before use (you need to install this in same folder where your .js program file is)
var results = []	// array to store data streamed from different URLs at different indices 
var count = 0 // to keep check on URL streaming, it increases as the streaming from one URL is completed 

function printResults(){
	for(var i=0;i<3;i++){
		console.log(results[i])	// print data streamed from different URLs, data streamed from 1st URL will be at index 0, from 2nd URL on index 1 and rom 3rd URL on index 2
	}
}

function httpGet(index){ // generalized function for reusability for each URl
	http.get(process.argv[2+index], function(response){ // index=0 -> 1st URL, index=1 -> 2nd URL and index=2 -> 3rd URL
		response.pipe(bl(function(err,data){
			if(err){
				return console.error(err)
			}

			results[index] = data.toString() // converting buffer objects into string and storing into 'results' array
			count++

			if(count === 3){ // will print result only after data streamed from all URLs
				printResults() // since data stored at indices sequentially, hence will be printed as required
			}
		}))
	})
}

for(var i=0;i<3;i++){
	httpGet(i) // initializing get requests for different indices
}
*/	

				