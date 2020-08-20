// Calculate Factorial of a number using for loop:

// X / *:
// 3! = 1X2X3
// 4! = 1X2X3X4
// 5! = 1X2X3X4X5
// 10! = 1*2*4*5*6*7*8*9*10

// normal system using for loop [Italitive method]:

// var factorial = 10;
// for(var i = 1; i <= 10; i++){
//    factorial = factorial * i
//     console.log(i, factorial);
// }

// using function :

function factorial(n){
    var fact = 1;
    for (var i = 1; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

var result = factorial(10);
console.log(result);