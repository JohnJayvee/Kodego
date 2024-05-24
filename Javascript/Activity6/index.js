const prompt = require('prompt-sync')();
const secretNumber = Math.floor(Math.random() * 100) + 1;

function guessTheNumberGame() {
    let guess;
    let attempts = 0;

    while (true) {
        guess = parseInt(prompt("Guess the number (between 1 and 100): "));
        if (isNaN(guess)) {
            console.log("Please enter a valid number.");
            continue;
        }

        attempts++;

        if (guess === secretNumber) {
            console.log(`Congratulations! You guessed the correct number ${secretNumber} correctly in ${attempts} attempts.`);
            break;
        } else if (guess < secretNumber) {
            console.log("Too low. Try again.");
        } else {
            console.log("Too high. Try again.");
        }
    }
}
guessTheNumberGame();
