// Calculate Factorial of a number using a while loop:

// only while loop:
var i = 1;
while (i <= 10) {
    // console.log(i);
        i++;
}

// 5! = 1*2*3*4*5
// in normal way with factorial:
// var i = 1;
// var factorial = 1;
// while (i <= 10) {
//     factorial = factorial * i;
//     console.log(i, factorial);
//     i++
// }
// console.log(factorial);


// in function way:
function factorial(n){
    var i = 1;
    var fact = 1;
    while (i <= n) {
        fact = fact * i;
    i++;
    }
    return fact;
}
var result = factorial(6);
console.log(result);