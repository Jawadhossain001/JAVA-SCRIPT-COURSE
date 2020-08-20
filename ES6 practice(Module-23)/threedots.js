// Spread operator, concatenate multiple arrays, array max:

const ages = [12, 14, 16, 13, 17];
const ages2 = [15, 16, 12];
const ages3 = [25, 36, 22, 29];

const allAges = ages.concat(ages2).concat([5]).concat(ages3).concat(["con"]);
console.log(allAges);

// in ES6 way:
const allAges2 = [...ages, ...ages2, 5, ...ages3]; 
// console.log(allAges2);


// in previous module:

const business = 650; 
const minister = 450; 
const sochib = 250;
const maximum = Math.max(business, minister, sochib);
console.log(maximum);

// in ES6 way:
const takaPaisa = [850, 450, 250];
const maximum = Math.max(...takaPaisa);
// console.log(maximum);






