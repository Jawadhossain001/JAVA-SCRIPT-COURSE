// global vs local variable IIFE function expression vs declaration:

function addTodo(task){
    const newTaskElement = document.createElement('li');
}

// global var:
var name = 'Rased';

// function addUser(){
//     console.log(name);
// }
// addUser()

function addUser(){
    var romanticName = 'jaantoos'
    console.log(name);
}
console.log(romanticName);
addUser();

// (iife)immediate invoking function expressions-- function:

(function(){
    var romanticName = 'jaantoos'
    console.log(romanticName);
})();

// expression vs declaration:

var name = 'Samad Khan'
var myTodo = function (task){

}