// import Person from "./person.js";

console.log('----------------------- Functional Code ----------------');

let fName = "";
let lName = "";
let age = 0;

function getFullName() {
    console.log(`${fName} ${lName}`);

}

function getCurrentAge() {
    console.log(`Current age ${age}`);
}

fName = "Juan";
lName = "Dela Cruz";
age = 20;

getFullName();
getCurrentAge();

fName = "John";
lName = "Doe";
age = 30;

getFullName();
getCurrentAge();

console.log('----------------------- OOP Code ----------------');



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

const person = new Person("Juan", "Dela Cruz", 20);

// Using the methods of the Person object
console.log(person.getFullName()); // Output: Juan Dela Cruz
console.log(person.getCurrentAge()); // Output: 20

console.log('----------------------- Abstraction ----------------');

class House {
    vips = [];
    visitors = [];
    constructor(address, price) {
        this.address = address;
        this.price = price;
    }

    enterVisitor(person) {
        person.getFullName();
        this.visitors.push(person);

        if (person.fName == "Iron" && person.lName == "Man") {
            this.vips.push(person);
        }
    }
}

const house = new House("123 sesame Street", 100000)
const john = new Person("John", "Doe", 20);
const ironMan = new Person("Iron", "Man", 22);
const jayvee = new Person("Jayvee", "Siuagan", 24);

house.vips.push(jayvee);

house.enterVisitor(john);
house.enterVisitor(ironMan);

console.log("Visitors:");
console.log(house.visitors);
console.log("Vips:")
console.log(house.vips);


console.log('----------------------- Encapulate ----------------');

class SafeHouse {
    #vips = [];
    #visitors = [];

    constructor(address, price) {
        this.address = address;
        this.price = price;
    }

    enterVisitor(person) {
        // Assuming the person object has getFullName method and fName, lName properties
        person.getFullName();
        this.#visitors.push(person);

        if (person.fName === "Iron" && person.lName === "Man") {
            this.#vips.push(person);
        }
    }

    get visitors() {
        let r = [];
        for (let v of this.#visitors) {
            r.push(v);
        }
        return r;
    }

    get vips() {
        let r = [];
        for (let v of this.#vips) {
            r.push(v);
        }
        return r;
    }
}

// Creating instances of Person
const john2 = new Person("John", "Doe");
const ironMan2 = new Person("Iron", "Man");

// Creating an instance of SafeHouse
const safeHouse = new SafeHouse("123 Sesame Street", 100000);
safeHouse.enterVisitor(john2);
safeHouse.enterVisitor(ironMan2);

// Attempt to backdoor (commented out since it should not work)
// safeHouse.vips.push(jayvee);

console.log("Visitors:");
console.log(safeHouse.visitors);
console.log("VIPs:");
console.log(safeHouse.vips);
