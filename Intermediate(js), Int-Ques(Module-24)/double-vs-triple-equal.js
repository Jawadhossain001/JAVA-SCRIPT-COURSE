// double equal (==) vs triple equal (===), implicit conversion:

// double equal:
const first = 2; 
// const second = 3;
// const second = 2; 
const second = "2"; 
if(first == second){
    // console.log("==condition is true");
}
else{
    // console.log("==condition is false");
}

// triple equal:
const first2 = 2; 
// const second2 = 3;
const second2 = 2; 
// const second2 = "2"; 
if(first2 === second2){
    // console.log("===condition is true");
}
else{
    // console.log("===condition is false");
}

// true & false in double equal:
// const first3 = 2;
const first3 = 1;
const second3 = true; 
if(first3 == second3){
    // console.log("==condition is true");
}
else{
    // console.log("==condition is false");
}

// const first4 = 1;
const first4 = 0;
const second4 = false; 
if(first4 == second4){
    // console.log("==condition is true");
}
else{
    // console.log("==condition is false");
}

// true & false in double equal:
// const first3 = 2;
const first5 = 1;
const second6 = true; 
if(first5 === second6){
    // console.log("===condition is true");
}
else{
    // console.log("===condition is false");
}

// const first4 = 1;
const first7 = 0;
const second7 = false; 
if(first7 === second7){
    console.log("===condition is true");
}
else{
    console.log("===condition is false");
}
