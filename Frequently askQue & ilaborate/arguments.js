// arguments and deal with unknown number of arguments:

function addNumbers(num1, num2){
    // console.log(arguments[3]);
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        // console.log(num);
        sum = sum + num;
    }
    // arguments.push(15); <-- in argument this type of elements is not working
    // return num1 + num2;
    // return sum;
}

var result = addNumbers(3, 5, 8, 15, 29);
console.log(result);




// How to organize code inside a function:

function addNumbers(num1, num2){
    var sum = 0;
    console.log('double', double);
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
}

function logInfo(message){
    console.log(message);
}
logInfo('Good morning');

var double = sum * 2;

return sum;

}