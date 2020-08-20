 // Make conditional decision, if-else, comparison:


var biscuitPrice = 12
if(biscuitPrice < 10){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}

var biscuitPrice = 8
if(biscuitPrice < 10){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}

var tourMember = 8
if(tourMember > 10){
    console.log("I will go to the tour");
}
else{
    console.log("I will not");
}

var biscuitPrice = 8
if(biscuitPrice == 10){
    console.log("I will eat the biscuits");
}
else{
    console.log("Khali cha is better");
}

var biscuitPrice = 7 
if(biscuitPrice != 8){
    console.log("I will eat the biscuits")
}
else{
    console.log("Khali cha is better")
}

// // Multiple conditions, fulfill both conditions, else if:

// var jobPaiso = false;
// var savingAmount = 5000000;
// if(jobPaiso == true && savingAmount > 200000){
//     console.log("Aso tomar patri khuji");
// }
// else{
//     console.log("Tor kopale biya nai");
// }

// // using or -> || :

// var jobPaiso = true;
// var savingAmount = 5000;
// if(jobPaiso == true || savingAmount > 200000){
//     console.log("Aso tomar patri khuji");
// }
// else{
//     console.log("Tor kopale biya nai");
// }

// var jobPaiso = false;
// var savingAmount = 5000000;
// if(jobPaiso == true && savingAmount > 200000){
//     console.log("Aso tomar patri khuji");
// }
// else if(jobPaiso == true){
//     console.log("accha koy din pore dekhbo");
// }
// else{
//     console.log("Tor kopale biya nai");
// }



var jobPaiso = true; 
var savingAmount = 500000;
if(jobPaiso == true || savingAmount > 600000){
    console.log("Aso tmar patri khuji");
}
else if (jobPaiso == true){
    console.log("accha tmar jonno patri khuji")
}
else{
    console.log("tor kopale biya nai");
}
