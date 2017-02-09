// Program to use a single synchronous filesystem operation to read a file and print the number of newlines(\n) it ontains to the console(stdout)

var fs = require('fs') // to get fs(File System) module from the Node core library for performing filesystem operation 
var fp = process.argv[2] // the filepath is given as first argument viz. element at index 2 returned from process.argv
var bfs = fs.readFileSync(fp) // variable to store the buffer object returned by fs.readFileSync()
var str = bfs.toString() // to convert the buffer object into string
// str.split('\n') will slit str into smaller strings having '\n' between them and its length will provide us number of such substrings created
// hence no of '\n' between such strings will be equal to number of such substrings - 1
var lines = (str.split('\n').length)-1;
console.log(lines);