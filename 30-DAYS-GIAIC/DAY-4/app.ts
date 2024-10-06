let correctNumber = 1; // Initially set the correct number to 1
let attempts = 0;
let isFirstGuess = true; // Flag to check if it's the first guess

window.onload = () => {
    const startGameBtn = document.getElementById('startGameBtn') as HTMLButtonElement;
    const guessBtn = document.getElementById('guessBtn') as HTMLButtonElement;
    const guessInput = document.getElementById('guessInput') as HTMLInputElement;
    const resultDisplay = document.getElementById('result') as HTMLParagraphElement;
    const guessSection = document.getElementById('guessSection') as HTMLDivElement;
    const attemptsDisplay = document.getElementById('attempts') as HTMLSpanElement;

    startGameBtn.addEventListener('click', () => {
        guessSection.style.display = 'block'; // Show the guessing section
        startGameBtn.style.display = 'none'; // Hide the start button
    });

    guessBtn.addEventListener('click', () => {
        const userGuess = parseInt(guessInput.value);
        attempts++;
        attemptsDisplay.textContent = attempts.toString();
        if (isFirstGuess) {
            resultDisplay.textContent = 'Congratulations! You guessed right!';
            correctNumber = Math.floor(Math.random() * 10) + 1; // Reset correct number randomly
            isFirstGuess = false; // Update the flag
        } else {
            if (userGuess === correctNumber) {
                resultDisplay.textContent = 'Congratulations! You guessed right!';
                correctNumber = Math.floor(Math.random() * 10) + 1; // Reset correct number randomly
            } else {
                resultDisplay.textContent = `Wrong! Try again! The correct number was ${correctNumber}.`;
                correctNumber = Math.floor(Math.random() * 10) + 1; // Reset correct number randomly
            }
        }
        guessInput.value = ''; // Clear the input field
    });
};
