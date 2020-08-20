// Destructure, Object, array, destructure complex object:

const person = {name: 'Jack William', age: 17, job: 'fcebooker', gfName: 'Ema Watson', address: 'Kochu Khet', phone: '01717112211', friends: ['Tom hancks', 'Tom Chouse']};

const gfName = person.gfName;
console.log(gfName);     //or

console.log(person.gfName); 

const { phone } = person;
console.log(phone);

// const gfName = person.gfName;
// const phone = person.phone;  or
// const { phone, gfName, address, salary } = person;
const { phone } = person;

const complexObject = {
    name: 'abc',
    info: {
        address: 'kola bagan',
        leader: 'Tiger Leader'
    }
}

const { leader } = complexObject.info;


// console.log(phone, gfName, address, salary);
// console.log(phone, gfName, address);

const friends = ['Sakib Khan', 'Arman Khan', 'Aamir khan', 'Salman Khan', 'Sharukh Khan'];
const [first, chotoFriend, ...olderF] = friends;
console.log(first, chotoFriend, ...olderF);


