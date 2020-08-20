// Unit Convert Inch to Feet use variable and function:

// // in normal way:

var inch = 156;
var feet = inch/12;
console.log(feet);


// // with using function for many time uses:
function inchToFeet(inch) {
    var feet = inch/12;
    return feet;
}

var nanaFeet = inchToFeet(56);
console.log(nanaFeet);
var naniFeet = inchToFeet(288);
console.log(nanaFeet);
var dadiFeet = inchToFeet(300);
console.log(nanaFeet);

// with using for loop:
var senior = [156, 288, 300];

var dadaFeet = inchToFeet(senior[0]);
console.log(dadaFeet);





