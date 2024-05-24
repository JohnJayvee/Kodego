const prompt = require('prompt-sync')();

console.log('\n --------------IF STATEMENT-------------\n');

let grade = 89;

if (grade == 100) {
    console.log("You have a perfect grade!");
}
else if (grade < 100 && grade > 90) {
    console.log("Nice Effort!");
}
else if (grade < 90 || grade > 80 || grade != 90) {
    console.log("Ask for help.");
}
else {
    console.log("keep studying!...");
}

let grade2 = "100";

if (grade === 100) {
    console.log("You have a perfect grade!");
}
else {
    console.log("Keep studying.");
}

let personObj = {
    firstName: "Juan",
    lastName: "Dela Cruz"
};

personObj = null;

if (personObj && personObj.firstName == "Juan") {
    personObj.firstName = "John";
    personObj.lastName = "Doe";

    console.log(`personObj: ${personObj.firstName} ${personObj.lastName}`);
}




console.log('\n --------------Ternary Operator-------------\n');

let message = grade2 == 100 ? "You have a perfect grade" : "keep studying";

console.log(message);

console.log('\n --------------Switch Statement-------------\n');

let colorCode = "0";
let color;
switch (colorCode) {
    case "0":
        color = "orange";
        break;

    case "r":
        color = "red";
        break;

    case "b":
        color = "blue";
        break;

    default:
        color = "black";
}

console.log(`the color is ${color}`);

console.log('\n --------------COALESCE-------------\n');

let name1 = null;
let name2 = "Juan Dela Cruz";

let nameCheck = name1 ?? name2;

console.log(nameCheck);

// let loginUser = "Juan Dela Cruz";
let loginUser = null;
let welcomeMessage = `welcome ${loginUser ?? "Guest"}`;

console.log(welcomeMessage);