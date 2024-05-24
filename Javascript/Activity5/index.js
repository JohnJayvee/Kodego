
const prompt = require('prompt-sync')();

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function guessTheNumberGame() {
    const min = 1;
    const max = 100;
    const randomNumber = getRandomNumber(min, max);
    let guess = null;
    let attempts = 0;

    console.log("Welcome to 'Guess the Number' game!");
    console.log(`I'm thinking of a number between ${min} and ${max}. Can you guess it?`);

    while (guess !== randomNumber) {
        guess = parseInt(prompt("Enter your guess: "), 10);
        attempts++;

        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
        } else if (guess < randomNumber) {
            console.log("Too low! Try again.");
        } else if (guess > randomNumber) {
            console.log("Too high! Try again.");
        } else {
            console.log(`Congratulations! You guessed the correct number ${randomNumber} in ${attempts} attempts.`);
        }
    }
}

guessTheNumberGame();
