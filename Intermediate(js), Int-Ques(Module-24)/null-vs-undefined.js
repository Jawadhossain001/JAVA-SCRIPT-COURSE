// Null Vs Undefined, different ways you will get undefined:

// find undefined in 1st way:
let pakhi;
// console.log(pakhi);

// 2nd & 3rd way:
function add(num1, num2){
    console.log(num1 + num2);
    return ;     // in 3rd way if return is only written ..
}

// const result = add(13, 82);
// console.log(result);

// 4rth way:
function add(num1, num2){
    console.log(num1, num2);
}
// const result = add(13);
// console.log(result);

// 5th way:
const premik = {name:"smart dude", phone:458421};
// console.log(premik.gf);

// 6th way we should not do it's not recommended:
let fun = undefined; 
// console.log(fun);

// 7th way:
let ages = [2, 4, 8];
// console.log(ages[11]);

// find null  