// map, filter, find, smart way to run for loop:

// made square in simple way:
const numbers =  [3, 4, 5, 6, 7, 8];
const output = [];

for (let i = 0; i < numbers.length; i++){
    const element = numbers[i];
    const result = element * element;
    output.push(result);
}
console.log(output);

// // made square in two way of map way:
// 1st way of map & different function way:
function square(element){
    return element * element;
}

// different function way:
// const square = element => element * element;

// different function way:
// const square = x => x * x;
// numbers.map(square);

// // 2nd way:
// // numbers.map(function(element, index, array){
// //     console.log(element, index, array);
// // })

// // const result = numbers.map(function(element){
// //     return element * element;
// // })

// // 3rd way:
// const result = numbers.map(x => x * x);

// // console.log(result);

// // filter way:
// // const bigger = numbers.filter( x => x > 5);
// const smaller = numbers.filter( x => x < 5);
// // console.log(smaller);

// // find way:
// const isThere = numbers.find(x => x > 5);
// console.log(isThere);