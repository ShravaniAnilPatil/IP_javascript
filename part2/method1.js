// Using ES6 Class Syntax
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    getDetails = () => { //member function
        return `${this.name}, aged ${this.age}, is a ${this.occupation}.`;
    }
}
const showGreeting = () => console.log("Hello, welcome!");

let person2 = new Person('Shravani Patil', 20, 'Web Developer');
console.log(person2.getDetails());
showGreeting();
