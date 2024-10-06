const bmiForm = document.getElementById('bmiForm') as HTMLFormElement;
const result = document.getElementById('result') as HTMLParagraphElement;

bmiForm.addEventListener('submit', function (event: Event) {
    event.preventDefault();

    const heightInput = (document.getElementById('height') as HTMLInputElement).value;
    const weightInput = (document.getElementById('weight') as HTMLInputElement).value;

    const height = parseFloat(heightInput);
    const weight = parseFloat(weightInput);

    if (height > 0 && weight > 0) {
        const bmi = (weight / (height / 100) ** 2).toFixed(2);
        result.textContent = `Your BMI is ${bmi}`;
    } else {
        result.textContent = 'Please enter valid height and weight.';
    }
});
