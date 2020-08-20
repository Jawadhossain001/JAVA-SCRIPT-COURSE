const students = [
    {id: 21, name: 'Omar Sunny'},
    {id: 31, name: 'Maannaaaaa'},
    {id: 41, name: 'Moyouri'}, 
    {id: 71, name: 'DeepJol'}
];

//not working..
// for(let i = 0; students.length > i; i++){
//     const name = [];
    // const element = students[i];                    
//     const result = element[];
//     name.push(result);
// }
// console.log(name);

// OR :
const names = students.map( s => s.name);
const ids = students.map(s => s.id);
const bigger = students.filter(s => s.id > 40);
const biggerOne = students.find(s => s.id > 40);
// console.log(biggerOne);