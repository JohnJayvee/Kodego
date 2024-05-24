// if (isNan(guesTCast)) {
//     console.log("Please enter a number only!");
// }else {
//     if (num == gues)
// }

const prompt = require('prompt-sync')();

console.log("\n--------------------- for loops---------------------\n");

for (let i = 0; i < 10; i++) {
    console.log(`For Loop value of i is ${i}`); //
}

console.log("\n \n");

for (let i = 0; i < 10; i += 2) {
    console.log(`For Loop value of i is ${i}`); //
}

console.log("\n \n");

for (let i = 10; i > 0; i--) {
    console.log(`For Loop value of i is ${i}`); //
}

console.log("\n \n");

const sampleArray = ["value1", "value2", "value3", "value4", "value5"];
sampleArray.push("value6");
sampleArray.push("value7");
sampleArray.push("value8");

for (let i = 0; i < sampleArray.length; i++) {
    console.log(sampleArray[i]);
}

console.log("\n \n");
// sampleArray.push("value6");  
for (let i = sampleArray.length - 1; i >= 0; i--) {
    console.log(sampleArray[i]);
}

console.log("\n--------------------- while loops ---------------------\n");

let print = true;
while (print) {
    console.log(`Print ${sampleArray.length - 1}`);
    sampleArray.pop();
    if (sampleArray.length == 0) {
        print = false;
    }
}


console.log("\n--------------------- do while loops ---------------------\n");

print = false;
do {

} while (print)

console.log("\n--------------------- Break & Continue ---------------------\n");

const sampleArray2 = ["value1", "value2", "value3", "value4", "value5"];
for (let i = 0; i < sampleArray2.length; i++) {
    console.log(sampleArray2[i]);

    if (i == 2) {
        break;
    }
}

console.log("\n \n");

for (let i = 0; i < sampleArray2.length; i++) {
    if (i == 2) {
        continue;
    }

    console.log(sampleArray2[i]);
}

console.log("--------------------- For In/Of Loop ------------- \n");

let obj = { fName: "Juan", lName: "Dela Cruz" };
for (let s in obj) {
    console.log(s);
}


for (let s in sampleArray2) {
    console.log(s);
}

for (let s of sampleArray2) {
    console.log(s);
}


for (let s of Object.values(obj)) {
    console.log(s);
}