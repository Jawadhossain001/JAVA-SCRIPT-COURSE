 // Fibonacci Element in a Recursive Way:

/*
    fibo[2] = [2-1] + [2-2]; -> 1 + 0
    fibo[3] = [3-1] + [3-2]; -> 2 + 1
    fibo[4] = [4-1] + [4-2]; -> 3 + 2
    fibo[5] = [5-1] + [5-2]; -> 4 + 3
    fibo[n] = [n-1] + [n-2]; -> it depends on n
    fibo[i] = [i-1] + [i-2]; -> it depends on i
*/

function fibonacci(n){
    if(n == 0){
        return 0;
    }
    if(n == 1){
        return 1;
    }
    else{
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}

var result = fibonacci(10);
console.log(result);