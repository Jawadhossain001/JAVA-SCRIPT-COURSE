// integer float parseInt parseFloat type conversion:

// integer:
var number1 = 25;

// float:
var number2 = 25.5;
console.log('number: ', number1 + number2);

// writing as string and what will happened:
var sting1 = '25';
var sting2 = '25.5';
console.log('string: ', sting1 + sting2);

// parse integer(parseInt):
var sting4 = '25.5';
var number4 = 25.5;
sting4 = parseInt(sting4);
console.log('Parse Integer: ', sting4 + number4);

// parse float (parseFloat):
var sting3 = '25.5';
var number3 = 25;
sting3 = parseFloat(sting3);
// sting3 = +sting3; // <-- different way of making string to number;
console.log('Parse Float: ', sting3 + number3);

// string:
var number5 = 25;
 
number5 = ''+ number3;
console.log(typeof number3);     // <-- its a sting for--> ''

// using fixed:
var number7 = 0.2;
var number6 = 0.1;
var total = number6 + number7;
total = total.toFixed(5);     // fixed number after .dot ..
console.log('Fixed Number:', total);