// Asynchronous Javascript setTimeout, setInterval:


// console.log(2222);
// console.log(3333);
// console.log(4444);

function doSomething() {
    console.log(3333);
}
// console.log(2222);
// doSomething();
// console.log(4444);


// how setTimeOut works:
console.log(2222);
setTimeout(doSomething, 1000);     //1000 means 1000-mili-second = it means 1sec..
console.log(4444);
console.log(4444);
console.log(4444);
console.log(4444);

// using with function:
setTimeout(function(){
    console.log('lazy and waiting')
}, 4000)

// or :
setTimeout(() => {
    console.log('see you later')
}, 4000)

// how setInterval works:
setInterval(function(){
    console.log('doing it')
})
