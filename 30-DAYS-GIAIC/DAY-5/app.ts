document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('display')!;
        const content = button.textContent!;
        
        if (content === 'AC') {
            display.textContent = '0'; // Reset the display to 0
        } else if (content === 'DEL') {
            // If DEL is pressed, remove the last character unless it's the only character, then set to '0'
            display.textContent = display.textContent!.length > 1 ? display.textContent!.slice(0, -1) : '0';
        } else if (content === '=') {
            try {
                // Replace all 'x' with '*' for multiplication to be evaluable in JavaScript
                display.textContent = eval(display.textContent!.replace(/x/g, '*').replace(/÷/g, '/')).toString();
            } catch (error) {
                display.textContent = 'Error'; // Display error if eval fails
            }
        } else {
            if (display.textContent === '0') {
                // If current display is '0', replace it with the button content unless the button is an operator
                if (['+', '-', 'x', '%', '/'].includes(content)) {
                    display.textContent += content;
                } else {
                    display.textContent = content;
                }
            } else {
                // For every other case, append the button content
                display.textContent += content;
            }
        }
    });
});
