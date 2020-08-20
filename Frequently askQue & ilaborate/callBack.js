// Callback function and pass different function:

function explain_callback(name, age, task){
    task();
    console.log('hello ', name);
    console.log('your age ', age);
}

function washHand(){
    console.log('wash hand with soap');
}

function takeShower(){
    console.log('Take shower');  
}

function scrollFacebook(){
    console.log("Scroll Facebook but don't like any posts");
}

explain_callback('Sogir Uddin', 17, washHand);
explain_callback('Jogir Uddin', 13, takeShower);
explain_callback('Mugir Uddin', 21, scrollFacebook);
