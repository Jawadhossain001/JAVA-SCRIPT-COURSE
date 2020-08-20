// window, global variable, global scope:


var name = 'Kuddus';    // <-- global variable..
function add (num1, num2){     // <-- it's a global function..
    var result = num1 + num2;
    // result = num1 + num2;   //<-- one kind of global variable making(shouldn't do)..
    // window.result = num1 + num2;  // <-- same(shouldn't do)..
    // console.log('Result inside: ', result);   // <-- scope variable..
    console.log('Name inside: ', name);
    function double(num){
        return num * 2;
    }
    var total = double(result);
    // return result;
    return total;
}
// console.log('Result inside: ', result);   // <-- not working, not any variable..
console.log('Name inside: ', name);     // <-- global variable..
var sum = add(13, 21);
console.log(sum); 