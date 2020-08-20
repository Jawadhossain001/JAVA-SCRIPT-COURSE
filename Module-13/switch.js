// javascript switch case break and default:

num = 1000
switch(num){
    case 1000:
    console.log('I am 1000');
    break;
    case 100:
        console.log("! am 100")
        break;
    case 20:
    case 10:
            console.log('I am either 10 or 10')
            break;
        // case 5:
        //     console.log('I am 5');
            // break;
            default:
                console.log(`I don't know who you are`)

}


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}


