// Array, index, set by index, indexOf:


// Array:
var friendsAge = [15, 17, 14, 16];

// console.log(friendsAge);
// console.log(friendsAge[2]);

var sonaliAge = friendsAge[2];
// console.log(sonaliAge);

friendsAge[1] = 21;
// console.log(friendsAge);

var position = friendsAge.indexOf(14);
var position = friendsAge.indexOf(141);  // <-- it has no position..

console.log(position);