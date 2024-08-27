// Using Constructor Function
function Person(name, age, occupation) {
    this.name = name;
    this.age = age;
    this.occupation = occupation;

    this.getDetails = function() {
        return `${this.name}, aged ${this.age}, is a ${this.occupation}.`;
    }
}

let person1 = new Person('Shravani Patil', 20, 'Web Developer');
console.log(person1.getDetails());
