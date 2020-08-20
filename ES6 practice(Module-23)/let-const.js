// Let, const, array declared with const, object declared with constL:

// using const in string:
const hubby = "Elias Kanchon";
// hubby = "Omar Sunny";          // <-- for this line console not working..

// console.log("Her Husband: ", hubby);


// using constant in number:
const numbers = [12, 45];
numbers[1] = 88;
numbers.push(12);
// console.log(numbers);

// numbers = ["Sunny", "Salman", "Omit Hasan"];        // <-- this is not working because of using const..

// const nayok = {name:"sakib khan", phone:4578};

console.log("Total: ", numbers, nayok);


// using let in Doctors Chamber:
let patientName = "Rahim Chacha";
patientName = "Fatema Khala";
console.log(patientName);

// using var is in for loop elements are leaked:
// let sum = 0 ;
// for(var i = 0; i < 10; i++){ 
//     sum = sum + i;
// }
// console.log(i);

// using let is in for loop elements are not leaked or leak prove:
let sum2 = 0 ;
for(let i = 0; i < 10; i++){         //it's not working because let is scope variable..
    sum2 = sum2 + i;      
    console.log(i);
}
console.log(i);


