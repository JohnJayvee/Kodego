class Person {
    constructor(fName, lName, age) {
        // console.log("Constructor called");
        // console.log(`${fName} ${lName} ${age}`);
        this.fName = fName;
        this.lName = lName;
        this.age = age;
    }
    getFullName() {
        console.log(`${this.fName} ${this.lName}`);

    }

    getCurrentAge() {
        console.log(`Current age ${this.age}`);
    }
}