// Scope, block scope, access outer scope variable:


// scope & simple way:
// function sum(first, second){
//     let result = first + second;
//     console.log(result);  // scope way;
//     return result;
// }
// const output = sum(3, 7);
// console.log(output);


// global scope..
let bonus = 20;

function sum(first, second){
    let result = first + second + bonus;  
    // console.log(bonus);    //<- scope way..
    if(result > 9){
        var mood = "happy";    //<- wasting ..
        mood = "fishy";
        mood = "funky"; 
        mood = "cranky";
        // console.log(mood);
    }
    // console.log(day);   //<- wast not working..
    var day = "friday";

    console.log(day);   //<- wast is working..
    return result;
}
const output = sum(3, 7)
    console.log(day);   // <-wast is working..
// console.log(bonus);     // global scope way..
// console.log(output);
 






//  for more information goto website: thatjsdude.com  ...

