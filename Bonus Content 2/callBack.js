// when and how to use javascript callback function:

/*
function welComeGuest(name){
    console.log(name);
}

const actorName = 'Tom Hanks';
welComeGuest(actorName);
*/

function welComeGuest(name, greetHandler) {
    greetHandler(name);
}

const actorName = 'Tom Hanks';

function greetMorning(name) {
    console.log('good morning', name);
}

function greetEvening(name) {
    console.log('good Evening', name);
}

function greetAfterNoon(name) {
    console.log('good AfterNoon', name);
}

welComeGuest(actorName, greetEvening);
welComeGuest('Kate Winslet', greetAfterNoon);
welComeGuest('Sakib Khan', function(){
    console.log('Spacial welcome Sakib Khan')
});

// showing callback function more easily:

function handleClick() {
    console.log('someone clicked me');
}
// document.getElementById('click').addEventListener('click', handleClick);
document.getElementById('click').addEventListener('click', function(){
    console.log('click me again');
})








 
