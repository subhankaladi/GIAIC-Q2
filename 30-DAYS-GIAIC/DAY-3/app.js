"use strict";
// Function to handle the celebration action
function celebrate() {
    const candles = document.querySelector('.candles');
    const balloons = document.querySelector('.balloons');
    // Toggle the class for lighting candles
    if (candles)
        candles.classList.toggle('lit');
    // Toggle the class for popping balloons
    if (balloons)
        balloons.classList.toggle('popped');
    // Trigger the confetti effect with specified properties
    confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
    });
}
// Expose the celebrate function to the global scope to be callable from HTML
window.celebrate = celebrate;
