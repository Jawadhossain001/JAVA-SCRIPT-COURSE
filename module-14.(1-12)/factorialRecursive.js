 // Calculate Factorial in a Recursive function:

// 10! = 1*2*3*4*5*6*7*8*9*10
// 0! = 1
// 2! = 1*2
// 3! = 2!*3
// 4! = 3!*4
// 5! = (5-1)!*6
// 6! = 1*2*3*4*5*6
// 7! = 1*2*3*4*5*6*7
// n! = (n-1)!*n 
// n! = n*(n-1)!

for(var i = 10; i >= 1; i--) {
    // console.log(i);
}

var i = 10;
while(i >= 1){
    i--;
    // console.log(i);
}  

// var recursive = 20;
// for(var i = 10; i>=1; i--) {
//  var result = recursive * i;
//  console.log(result);
// }

//  while loop is not working:

// var recursive = 20;
// while(i >= 1){
//     i--;
//     var result = recursive  * i;
// }
//  console.log(result); 


// using factorial with recursive in function:

function factorial(n){
    if(n == 0){
        return 1;
    }
    else{
        return n * factorial(n-1);
    }  
}
var result = factorial(10);
console.log(result);