const apiKey = 'c2d34e085ba6d0afd50480dd1329cd4d'; 

async function getWeather() {
    const city = document.getElementById('city').value;
    if (!city) {
        alert('Please enter a city name.');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found');
        }

        const weatherData = await response.json();
        displayWeather(weatherData);
    } catch (error) {
        alert(error.message);
    }
}

function displayWeather(data) {
    const weatherResult = document.getElementById('weather-result');
    weatherResult.innerHTML = `
        <div class="weather-info"><strong>City:</strong> ${data.name}</div>
        <div class="weather-info"><strong>Temperature:</strong> ${data.main.temp} °C</div>
        <div class="weather-info"><strong>Weather:</strong> ${data.weather[0].description}</div>
        <div class="weather-info"><strong>Humidity:</strong> ${data.main.humidity} %</div>
        <div class="weather-info"><strong>Wind Speed:</strong> ${data.wind.speed} m/s</div>
    `;
}
