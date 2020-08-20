// when and how to use arguments in a function:

function getFullName(firstName, lastName){
    // console.log(arguments);

    // Arguments converting to Array:
    const result = [...arguments].join(' ');


    // const fullName = firstName + ' ' + lastName;
    let fullName = ''; 
    for (let i = 0; i < arguments.length; i++ ) {
        const namePart= arguments[i];
        fullName = fullName + ' ' + namePart;
    }
    return fullName;
}
const name = getFullName('Omuk', 'songket', 'bin', 'Hanif','songkhet', 'Poribohon');
console.log(name);