// Start sum

function sum(num1, num2) {
    return num1 + num2;
}

const sumArrow = (num1, num2) => num1 + num2;

console.log(sum(10, 11));
console.log(sumArrow(10, 11));

// End sum


// Start generateRandomNumber

function generateRandomNumber(range) {
    return Math.floor(Math.random() * range) + 1;
}

const generateRandomNumberArrow = range => Math.floor(Math.random() * range) + 1;

console.log(generateRandomNumber(10));
console.log(generateRandomNumberArrow(10));

// End generateRandomNumber


// Start greet

function greet() {
    return "Hello World!";
}

const greetArrow = () => "Hello World!";

console.log(greetArrow());

// End greet


// Start cars

const cars = ["Ferrari", "Toyota", "Mitsubishi"]

cars.forEach(function(item) {
    console.log(item);
})

    cars.forEach(car => console.log(car));

// End cars


// Start btn

// btn.addEventListerner("Click", e => alert("test"));

// End btn