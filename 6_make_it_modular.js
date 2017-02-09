// Program to import our module and provide it necessary arguments so it can filter out reuired files for us to print in console(stdout) from here

var mymodule = require('./6_module.js')	// makes an object of our module file we wanted to import
const dr = process.argv[2]	// store directory name
const et = process.argv[3]	// file extension to filter, example - 'txt' or 'doc' which needs to be used as '.txt' or '.doc' in module and should be processed in that file and not here as specifically mentioned in task

mymodule(dr,et,function(err,data){
	if(err){
		console.log('There was error')	// error handling
	} else{
		for(let i=0;i<data.length;i++){
			console.log(data[i])
		}
	}
})