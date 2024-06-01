let arrNumbers = [10, 20, 30];

function getAverage(arr){
    let total = 0;
    for (let i =    0; i < arr.length; i++){
        let number  = arr[i];
        total +=number;
    }
    return total / arr.length;
}

let average = getAverage(arrNumbers);
console.log(average);