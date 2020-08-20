// revisit Variable, string, array, loop:

var number = 59;
number = 79;
number =119;
// const name = 'Asad';

// console.log(number);



var marks = [89, 97, 89, 68, 94, 84, 79];

for(var i = 0; i < marks.length; i++){
    // console.log('hello');

    var element = marks[i];
    // console.log(element);
}



// Remove confusion with function and function vs loop:

// console.log('outside');
// console.log('gulisthan');

function add(number1, number2){
    var total = number1 + number2;
    return total;
}

var result1 = add(65, 89);
// console.log(result1);

var adam = 'Adam Sandler';
var kodom = 'Kodom sandler';
// console.log('not adding this time', adam);
// console.log('not eating right now');

var result2 = add(144, 568);
// console.log(result2); 


function largestNumber(numbers){
   var larger = numbers[0];
    for(var i = 0; i < numbers.length; i++){
        var element = numbers[i];
      if(element > larger){
          larger = element;
        }
     // // console.log(element);
   } 
    return larger;
}
// // var output = largestNumber([45, 78, 89]);

var numbers = [65, 45, 23, 11, 89, 91, 67, 61]; 
var output = largestNumber(numbers);
console.log('output', output);




