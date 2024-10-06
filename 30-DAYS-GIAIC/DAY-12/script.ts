// Unit conversion factors (relative to meters)
const conversionFactors: { [key: string]: number } = {
    meters: 1,
    kilometers: 0.001,
    feet: 3.28084,
    miles: 0.000621371
  };
  
  // Get DOM elements
  const fromUnitSelect = document.getElementById("fromUnit") as HTMLSelectElement;
  const toUnitSelect = document.getElementById("toUnit") as HTMLSelectElement;
  const valueInput = document.getElementById("value") as HTMLInputElement;
  const resultOutput = document.getElementById("resultOutput") as HTMLParagraphElement;
  const converterForm = document.getElementById("converterForm") as HTMLFormElement;
  
  converterForm.addEventListener("submit", (event) => {
    event.preventDefault();
  
    const fromUnit = fromUnitSelect.value;
    const toUnit = toUnitSelect.value;
    const inputValue = parseFloat(valueInput.value);
  
    if (isNaN(inputValue)) {
      resultOutput.textContent = "Please enter a valid number.";
      return;
    }
  
    // Convert input value to meters
    const valueInMeters = inputValue / conversionFactors[fromUnit];
  
    // Convert meters to target unit
    const convertedValue = valueInMeters * conversionFactors[toUnit];
  
    resultOutput.textContent = `${convertedValue.toFixed(2)} ${toUnit}`;
  });
  