// Using Factory Function
const createPerson = (name, age, occupation) => {
    return {
        name,
        age,
        occupation,
        getDetails() {
            return `${this.name}, aged ${this.age}, is a ${this.occupation}.`;
        }
    };
}

let person3 = createPerson('Shravani Patil', 20, 'Web Developer');
console.log(person3.getDetails());
