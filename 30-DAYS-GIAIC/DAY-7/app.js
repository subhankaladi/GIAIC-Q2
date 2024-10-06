"use strict";
const jokes = [
    "Why do programmers prefer dark mode? Because light attracts bugs.",
    "Debugging: Being the detective in a crime movie where you're also the murderer.",
    "A SQL query walks into a bar, walks up to two tables and asks, 'Can I join you?'",
    "How many programmers does it take to change a light bulb? None, that's a hardware problem.",
    "Why do Java developers wear glasses? Because they can't C#.",
    "Knock, knock. Who's there? Program. Program who? Program terminated unexpectedly.",
    "There are 10 types of people in the world: those who understand binary, and those who don’t.",
    "I’d tell you a joke about UDP, but you might not get it.",
    "Why do programmers hate nature? It has too many bugs.",
    "To understand recursion, you must first understand recursion.",
    "I changed my password to 'incorrect.' So whenever I forget, the computer tells me, 'Your password is incorrect.'",
    "Why did the developer go broke? Because he used up all his cache.",
    "In programming, the hard part isn’t coding. It’s naming variables.",
    "I would love to change the world, but they won’t give me the source code.",
    "Why did the JavaScript developer break up with their girlfriend? Because she didn't 'null' his feelings.",
    "404 Error: Joke not found.",
    "Why don’t programmers like to go outside? The sunlight causes too many glares on the screen.",
    "A programmer's wife tells him: 'Get some bread from the store, and if they have eggs, get a dozen.' He comes back with 12 loaves of bread.",
    "What do you call a programmer from Finland? Nerdic.",
    "Why did the computer go to the doctor? Because it had a virus."
];
function getNewJoke() {
    const jokeElement = document.getElementById('joke');
    if (jokeElement) { // This check ensures jokeElement is not null
        jokeElement.innerText = jokes[Math.floor(Math.random() * jokes.length)];
    }
    else {
        console.error('Joke element not found');
    }
}
