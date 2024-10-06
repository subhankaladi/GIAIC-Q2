// Declare the external library function to let TypeScript know it exists
declare const confetti: any;

// Function to handle the celebration action
function celebrate(): void {
  const candles = document.querySelector('.candles');
  const balloons = document.querySelector('.balloons');

  // Toggle the class for lighting candles
  if (candles) candles.classList.toggle('lit');

  // Toggle the class for popping balloons
  if (balloons) balloons.classList.toggle('popped');

  // Trigger the confetti effect with specified properties
  confetti({
    particleCount: 100,
    spread: 70,
    origin: { y: 0.6 }
  });
}

// Expose the celebrate function to the global scope to be callable from HTML
(window as any).celebrate = celebrate;
