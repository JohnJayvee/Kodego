//method () = function


// let ok = () => {
//     console.log(`Happy New Year!`);
// }
// // setTimeout(ok('Jayvee'), 1000);

// // const sample = 
// setTimeout(ok, 3000);

// // clearTimeout(sample);


// let time = 10
// let btn = document.getElementById("time");

// function startTime() {
//     if (time > 0) {
//         time = time - 1;
//         btn.innerText = time;
//         setTimeout(startTime, 1000);
//     } else {
//         alert("Happy New Year");
//     }
// }



// let ok = () => {
//     console.log(`Happy New Year!`);
// }
// // setTimeout(ok('Jayvee'), 1000);

// // const sample = 

// const sm = setInterval(ok, 1000);


// setTimeout(() => {
//     clearInterval(sm);
//     console.log("End Program")
// }, 3000);

// // clearTimeout(sample);
// function good(status) {
//     console.log(status);
// }

// function bad(status) {
//     console.log(status);
// }


// let x = 1;
// let promise = new Promise((good, bad) => {
//     if (x == 1) {
//         good('yes');
//     } else {
//         bad('no');
//     }
// }).then(good, bad)


const url = 'https://famous-quotes4.p.rapidapi.com/random?category=all&count=2';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'c7f80d1b1cmsh050cbada905a657p11b4eajsnec60a44753e3',
        'x-rapidapi-host': 'famous-quotes4.p.rapidapi.com'
    }
};

let list;
let all = document.getElementById('all');

// async operation
fetch(url, options).then(response => response.json())
    .then(response => {
        console.log(response); // array
        list = response;
        list.forEach((item) => {
            let b = document.createElement('div');

            let q = document.createElement('h1');
            q.innerText = item.text;
            b.appendChild(q);

            let a = document.createElement('h1');
            a.innerText = item.author;
            b.appendChild(a);
            all.appendChild(b);
        });
    });
