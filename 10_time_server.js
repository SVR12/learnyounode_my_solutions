// Program to write the current date & time with a TCP time server

const net = require('net') // to get net module from the Node core library

var server = net.createServer(function (socket){
	var d = new Date() // new Date object
	var curr_year, curr_month, curr_date, curr_hours, curr_minutes
	curr_year = d.getFullYear()	// if else loops used to make two digit format, example - '2' -> '02'
	if(d.getMonth() < 9){
		curr_month = '0' + (d.getMonth() + 1)
	}else{
		curr_month = d.getMonth() + 1
	}
	if(d.getDate() < 10){
		curr_date = '0' + d.getDate()
	}else{
		curr_date = d.getDate()
	}
	if(d.getHours() < 10){
		curr_hours = '0' + d.getHours()
	}else{
		curr_hours = d.getHours()
	}
	if(d.getMinutes() < 10){
		curr_minutes = '0' + d.getMinutes()
	}else{
		curr_minutes = d.getMinutes()
	}
	var out = curr_year + '-' + curr_month + '-' + curr_date + ' ' + curr_hours + ':' + curr_minutes + '\n' // required format string stored in variable
	socket.end(out) // since '.out(data)' method provides us option to write data if passed as an argument, we don't need to use '.write(data)' method
})
server.listen(process.argv[2]) // server listening at port provided as first command-line argument

// learnyounode original solution
/*
var net = require('net') // to get net module from Node core library

function ZeroFill(i){	// generic function to make single digit value in two digit form, example '2' -> '02'
	return (i<10?'0':'') + i
}

function now(){
	var d = new Date() // new date object
	return d.getFullYear() + '-' + zeroFill(d.getMonth()+1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes())
}

var server = net.createServer(function(socket){
	socket.end(now+'\n') // closing server with writing output along with new line character in socket
})

server.listen(Number(process.argv[2])) // server listening on port number obtained from command-line argument, 'Number()' method is used to convert first command-line argument to number
*/