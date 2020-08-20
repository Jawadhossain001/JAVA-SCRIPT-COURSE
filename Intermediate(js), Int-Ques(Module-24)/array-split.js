// Array slice, splice, array join elements:

// array slice: 
const nums = [1, 2, 3, 4, 5, 6, 7, 8];
// const part = nums.slice(2, 5);
// console.log(part); 
// console.log(nums);

// array splice -> removing & adding:
const remove = nums.splice(2, 3, 77, 88);
// console.log(remove);
// console.log(nums);

// array join:
const together = nums.join(", ");  //("") or (",") or ("ami")
// console.log(together);


// slice, splice, join -> in string way:
const strings = ["ami", "amar", "me", "I", "my", "myself"];
// const part = strings.slice(2, 5);
// const part = strings.splice(2, 3, "amgo");
const part = strings.join(", ")
console.log(part);
console.log(strings);