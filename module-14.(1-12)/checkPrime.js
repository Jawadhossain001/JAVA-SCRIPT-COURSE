// Check whether a number is a Prime Number or not:

// in simple way:
/*
    var n = 18; 
    for(i = 2; i < n-1; i++){
        console.log(i, n / i);
    }  
*/

// when use %:
/*    
    var n = 18; 
    for(i = 2; i < n - 1; i++){
        console.log(i, n % i);  
    }
*/


// // when use :
  var n = 128; 
    for(i = 2; i < n; i++){
        // console.log(i, n % i);
        if(n % i == 0){
            console.log('Not a prime number');
            break;
        }
    }
    console.log('Your number is a prime number'); 



// in function:

// function isPrime(n) { 
//     for(i = 2; i < n - 1; i++) {
//         if(n % i == 0) {
//             return 'Not a prime number';
//         }
//     }
//     return 'Your number is a prime number';
// }
// var result = isPrime(139);
// console.log(result);