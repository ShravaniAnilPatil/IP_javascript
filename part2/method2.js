// Using Object Literal
const person = {
    name: 'Shravani Patil',
    age: 20,
    occupation: 'Web Developer',
    getDetails() {
        return `${this.name}, aged ${this.age}, is a ${this.occupation}.`;
    }
};

console.log(person.getDetails());
