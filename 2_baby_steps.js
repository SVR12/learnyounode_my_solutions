// Program to accept one or more numbers as command-line arguments and prints the sum of those numbers to the console(stdout)

var sum=0 // variable initialized to store the sum of numbers

// Since we are not provided the number of numbers that's why we need to use for/while loop here till we reach last index of array obtained using process.argv!
// Also the required numbers are stored in indices on and above 2.

// Using for loop
for(let i=2;i<process.argv.length;i++){
	sum+=Number(process.argv[i]) //the array elements obtained from process.argv will be strings and hence needed to be converted into number before performing any arithmetic operation
}


// Using while loop
/*
var count=2; // variable to pass as index of array obtained from process.argv 
while(count<process.arg.length){
	sum+=Number(process.argv[count]);
}
*/

console.log(sum) // prints final sum on console(stdout)