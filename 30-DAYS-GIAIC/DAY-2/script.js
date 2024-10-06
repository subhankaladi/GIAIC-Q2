"use strict";
// Assuming you're using a basic setup without a framework like Angular
// If you're using a framework, some of this might be handled differently
function fetchWeather() {
    const cityInput = document.getElementById('cityInput');
    const city = cityInput.value;
    if (city) {
        const result = {
            temperature: "It's hot at 31.3°C. Stay hydrated!",
            description: "It's a beautiful sunny day!",
            city: "Karachi During the Day"
        };
        displayWeather(result);
    }
}
function displayWeather(result) {
    const temperature = document.getElementById('temperature');
    const description = document.getElementById('description');
    const city = document.getElementById('city');
    const weatherResult = document.getElementById('weatherResult');
    temperature.textContent = result.temperature;
    description.textContent = result.description;
    city.textContent = result.city;
    weatherResult.classList.remove('hidden');
}
// This function can later be extended to fetch actual data from a weather API.
