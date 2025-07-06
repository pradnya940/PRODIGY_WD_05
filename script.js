const apiKey = "e885c51899b7d93a620ea5e7b48de230";

function getWeather() {
  const city = document.getElementById("cityInput").value;
  const weatherDataDiv = document.getElementById("weatherData");

  if (!city) {
    weatherDataDiv.innerHTML = `<p>Please enter a city name.</p>`;
    return;
  }

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(url)
    .then(response => {
      if (!response.ok) throw new Error("City not found");
      return response.json();
    })
    .then(data => {
      const { name, main, weather, wind } = data;
      weatherDataDiv.innerHTML = `
        <h2>${name}</h2>
        <p><strong>${weather[0].main}</strong> - ${weather[0].description}</p>
        <p>🌡️ Temp: ${main.temp} °C</p>
        <p>💧 Humidity: ${main.humidity}%</p>
        <p>🌬️ Wind Speed: ${wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      weatherDataDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    });
}
