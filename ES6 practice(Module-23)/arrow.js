// Arrow function, multiple parameter, function body:


// // old way:
function doubleIt(num){       // //or
    return num * 2
}

const doubleIt = function myFun(num){
    return num * 2;
}

const result = doubleIt(5);
console.log(result);

// // in ES6 method:
const doubleIt = num => num * 2;
const add = (x, y) => x + y; 

const gives5 = () => 5;

const doMath = (x, y) => {
    const sum = x + y;             // 7 + 5 = 12
    const diff = x - y;           // 7 - 5 = 2
    const result = sum * diff;   // 12 * 2
    return result;
}

const result = doubleIt(5);
const result = add(50, 70);
const result2 = gives5();
const result3 = doMath(7, 5);
console.log(result3);




