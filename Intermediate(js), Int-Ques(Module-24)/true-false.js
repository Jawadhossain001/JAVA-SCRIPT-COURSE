// Truthy and Falsy values:


// condition in number is Truthy:
const age = 4;

if(age){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// condition in number is falsy:
const age2 = 0;

if(age2){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// condition in string is Truthy:
const name = "Solaiman"; // " ", "0", {}, [], true, "false";

if(name.length > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// condition in string is falsy:
const name2 = ""; // false, ''; 

if(name2.length > 0){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

// condition in undefined & null & NaN is falsy:
// let name3;
// let name3 = null;
// let name3 = NaN;
// console.log(name3);
// if(name3){
//     console.log("condition is true");
// }
// else{
//     console.log("condition is false");
// }

