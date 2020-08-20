// new keyword, class and object difference:

class person {
    constructor(firstName, lastName, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.salary = salary;
    }
}

const heroPerson = new person('Hero', 'Balam', 25000);
console.log(heroPerson);
const friendlyPerson = new person ('Hero', 'Golam', 25000);
console.log(friendlyPerson);


// or(old version):
// function Person1(firstName, lastName, salary){
//     this.firstName = firstName;
//         this.lastName = lastName;
//         this.salary = salary;
// }

// const oldPerson = new Person1('Grand', 'papa', 1200);
// console.log(oldPerson);