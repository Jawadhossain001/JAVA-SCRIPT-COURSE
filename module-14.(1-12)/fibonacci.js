 // Create a Fibonacci Series using a for loop:

/*
    fibo[2] = [2-1] + [2-2]; -> 1 + 0
    fibo[3] = [3-1] + [3-2]; -> 2 + 1
    fibo[4] = [4-1] + [4-2]; -> 3 + 2
    fibo[5] = [5-1] + [5-2]; -> 4 + 3
    fibo[n] = [n-1] + [n-2]; -> it depends on n
    fibo[i] = [i-1] + [i-2]; -> it depends on i
*/

// iterative way with for loop: 

// var fibo = [0, 1];
// for(var i = 2; i <= 10; i++){
//     fibo[i] = fibo[i - 1] + fibo[i - 2];

// console.log(fibo[i], fibo[i - 1], fibo[i - 2]);
// }
 
// console.log(fibo); 


// in function:
function fibonacci(n){
    var fibo = [0, 1];
    for(var i = 2; i <= n; i++){
        fibo[i] = fibo[i - 1] + fibo[i - 2];
        // console.log([i], fibo[i - 1], fibo[i - 2]);
    }
    return fibo;
}
var result = fibonacci(12);
console.log(result);
