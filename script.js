function getWeather() {
  const cityInput = document.getElementById("cityInput");
  const cityName = cityInput.value;

  if (cityName.trim() === "") {
    alert("Please enter a city name");
    return;
  }

  const apiKey = "f4d2860e96557fd252e500150d07a1df"; 
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displayWeather(data);
    })
    .catch((error) => {
      console.error("Error fetching weather data:", error);
    });
}

function displayWeather(weatherData) {
  const weatherInfo = document.getElementById("weatherInfo");
  weatherInfo.innerHTML = `
        <h2>${weatherData.name}, ${weatherData.sys.country}</h2>
        <p>${weatherData.weather[0].description}</p>
        <p>Temperature: ${weatherData.main.temp} &deg;C</p>
        <p>Humidity: ${weatherData.main.humidity}%</p>
        <p>Wind Speed: ${weatherData.wind.speed} m/s</p>
    `;
}
