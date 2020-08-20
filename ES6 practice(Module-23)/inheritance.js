// Inheritance, extends class, super, class method:

// class Parent {
//     constructor(){
//         this.fatherName = "Schwerznegger";
//     }
// }
// class Child extends Parent{
//     constructor(name){
//         super();
//         this.name = name;
//     }
//     getFullName(){
//         return this.name + " " + this.fatherName;
//     }
// }

// const baby = new Child("Arnold");
// const baby2 = new Child("Tom");
// console.log(baby); 
// console.log(baby2); 
// console.log(baby.getFullName()); 
// console.log(baby2.getFullName());





// for more example:   https://beginnersbook.com/2013/03/oops-in-java-encapsulation-inheritance-polymorphism-abstraction/     



class Parent{
    constructor(){
        this.fatherName =  "Shwerznegger";
    }
}

class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){
        // return this.name +" "+this.fatherName;
        return `${this.name} ${this.fatherName}`;
    }
}

const baby = new Child("Arnold");
const baby2 = new Child("Tom");
console.log(baby.getFullName());
console.log(baby2);