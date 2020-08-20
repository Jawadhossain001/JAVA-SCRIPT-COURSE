// // Find the largest element of an array:


var marks = [45, 81, 63, 98, 56, 35, 23];
var max = marks[0];
for(var i = 0; i < marks.length; i++){
   var element = marks[i];
   if(element > max){
       max = element;
   }
}
// console.log("Highest Number is: ", max);



// arrayMin:
// find the Lowest element of an array:

var marks = [43, 45, 23, 34, 45, 56, 67, 68, 69, 70, 74, 73, 74]
var min = marks [0];
for(var i = 0; i < marks.length; i++){
    var element = marks [i];
    if(element > min){
        min = element;
    }
}
console.log("Lowest value is: ", min);
