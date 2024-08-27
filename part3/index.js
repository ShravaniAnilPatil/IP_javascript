
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }

    getDetails() {
        return `${this.name}, aged ${this.age}, is a ${this.occupation}.`;
    }
}
class Student extends Person {
    constructor(name, age, occupation, rollNo, grade) {
        super(name, age, occupation);
        if (rollNo <= 0) {
            throw new Error('Roll number must be greater than zero.');
        }

        this.rollNo = rollNo;
        this.grade = grade;
    }

    getDetails() {
        return `${super.getDetails()} Student Roll No: ${this.rollNo}, Grade: ${this.grade}.`;
    }
}
try {
    let student1 = new Student('Shravani Patil', 22, 'Web Developer', 101, 'A');
    console.log(student1.getDetails());

    // Uncomment the following lines to see the exception handling
    // let student2 = new Student('John Doe', 20, 'Software Engineer', 0, 'B');
    // console.log(student2.getDetails());
} catch (error) {
    console.error(error.message);
}
