console.log('----------------------- Synchronous function ----------------');

function doTask1() {
    console.log('doing task1...');
}

function doTask2() {
    console.log('doing task2...');
}

doTask1();
doTask2();

console.log('----------------------- Asynchronous function ----------------');

function doDownloadFile() {
    setTimeout(() => {
        console.log('Done Downloading...');
    }, 100);
}

doTask1();
// doDownloadFile();
doTask2();

console.log('----------------------- Callback function ----------------');

function sleep(miliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < miliseconds);
}

let json = {
    firstName: "Juan",
    lastName: "Dela Cruz",
    age: 20
}

let isSuccess = true;
function doFetchAPICallback(url, callbacksuccess, callbackerror) {
    console.log(`Fetching api... with url: ${url}`);
    sleep(500);

    if (isSuccess) {
        callbacksuccess('API Fetching Success');
        console.log(JSON.stringify(json));
    } else {
        callbackerror('API Fetching Failed');
    }
}

doFetchAPICallback(
    'https://kodego.ph',
    (message) => console.log(message),
    (message) => console.log(message),
);

console.log('----------------------- Promises ----------------');

isSuccess = true;
function sleep(miliseconds) {
    const date = Date.now();
    let currentDate = null;
    do {
        currentDate = Date.now();
    } while (currentDate - date < miliseconds);
}

function fetchingAPIPromise(url) {
    const promise = new Promise((resolve, reject) => {
        console.log(`Fetching api using promise with url${url}`);
        sleep(500);

        if (isSuccess) {
            resolve(json);
        } else {
            reject('API Fetching Failed');
        }
    });
    return promise;
}

// fetchingAPIPromise('https://kodego.ph').then((json) => {
//     console.log('API Fetched Successfully');
//     console.log(json);
//     return json;
// })
// .then((json) => {
//     console.log('another chain');
// })
// .catch((err) => console.log(err));

// console.log('Done Calling Promise');

console.log('----------------------- Async & Await ----------------');


async function doFetchAPIAsyncAwait() {
    try {
        let json = await fetchingAPIPromise('https://kodego.ph');
        console.log('Fetching API is done');
        console.log(json);
    } catch (err) {
        console.log(err);
    }
}

doFetchAPIAsyncAwait();