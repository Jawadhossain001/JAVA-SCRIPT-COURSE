// check whether a year is a Leap Year or not:

// Leap year:
const year1 = 3688;
// console.log(year1 % 4);

// Not a leap year: 
const year2 = 3791;
// console.log(year2 % 4);

// Leap year:
const year0 = 3688;
// console.log(year0 / 4);

// Not a leap year: 
const year = 3791;
// console.log(year / 4);

const year3 = 3944; 
const remainder = year3 % 4;
// console.log(remainder == 0);

const year4 = 3945;
const remainder2 = year4 % 4;
if(remainder2 == 0) {
    console.log('Your year is a leap year');
} else {
    console.log('Your year is not a leap year');
}

// In function:
function isLeapYear(year5){
    const remainder3 = year5 % 4;
    if(remainder3 == 0) {
        return true;
    } else {
        return false;
    }
}

const check2000 = isLeapYear(2000);
console.log(check2000);


// final definition of leapyear:
function leapYear(year){
    var result;
    year = parseInt(document.getElementById("isYear").value);
    if(years / 400){
        result = true;
    }
    else if(years / 100){
        result = false;
    }
    else{
        return result;
    }
}


