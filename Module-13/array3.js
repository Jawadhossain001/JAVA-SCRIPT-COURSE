// array add and remove element from the beginning and slice:

var teaLine = ['Kamal', 'Salam', 'Balam'];
teaLine.shift();
// console.log(teaLine);

var coffeeLine = ['Kamal', 'Salam', 'Balam'];
coffeeLine.unshift('Palam');
// console.log(coffeeLine);

var bikeLine = ['Kamal', 'Salam', 'Balam', 'Jalam', 'Talam'];
var part = bikeLine.slice(2);
console.log(part); 

var carLine = ['Kamal', 'Salam', 'Balam', 'Jalam', 'Talam', ];
// var part = carLine.slice(2, 4);
// console.log(part);
// console.log(teaLine); 

var sitLine = ['Kamal', 'Salam', 'Balam', 'Jalam', 'Talam'];
var part = sitLine.splice(2, 4);
console.log(part);
// console.log(sitLine); 