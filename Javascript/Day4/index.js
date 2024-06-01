let number1 = 1;
let number2 = 5;

let sum = number1 + number2;
console.log(`sum is ${sum}`);

nummber1 = 10;
sum = number1 + number2;
console.log(`sum is ${sum}`);

console.log("\n==========using a Function=========\n");

function getSum(num1, num2) {
    let total = num1 + num2;
    return total;
}

sum =  getSum(1,5);
console.log(sum);
sum =  getSum(10,9);
console.log(sum);


console.log("\n==========using a Function with default=========\n");

function getSumWithDefault(num1, num2 = 10) {
    let total = num1 + num2;
    console.log(total);
}

getSumWithDefault(1);
getSumWithDefault(1, 20);


console.log("\n==========saving a Function in a variable=========\n");

const mySumFunction = function (num1, num2) {
    let total = num1 + num2;
    console.log(total);
}

const mySubtractFunction = function (num1, num2) {
    let total = num1 - num2;
    console.log(total);
}

mySumFunction(1, 12);
mySumFunction(21, 12);

function calculate(SumFunction) {
    SumFunction(10, 12);
}

calculate(mySubtractFunction);

console.log("\n==========ForEach=========\n");

const cars = ["ferrari", "toyota", "honda"];

cars.forEach(function (item, index) {
    console.log(`item is ${item} index is ${index}`);
});

console.log("\n==========pass by value and pass bye reference=========\n");

let value = 10; 

function passByValue(v){
    return v = 11;
}

passByValue(value);
console.log(`value is ${passByValue(value)}`);

let obj = {
    value: 10
};

function passByReference(o) {
    o.value = 11;
}
passByReference(obj);
console.log(`obj.value is ${obj.value}`);