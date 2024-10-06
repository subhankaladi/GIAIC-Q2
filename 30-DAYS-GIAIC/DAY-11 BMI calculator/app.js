"use strict";
const bmiForm = document.getElementById('bmiForm');
const result = document.getElementById('result');
bmiForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const heightInput = document.getElementById('height').value;
    const weightInput = document.getElementById('weight').value;
    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);
    if (height > 0 && weight > 0) {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);
        result.textContent = `Your BMI is ${bmi}`;
    }
    else {
        result.textContent = 'Please enter valid height and weight.';
    }
});
