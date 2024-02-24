function currentWeatherDetails(response) {
  let temperatureElement = document.querySelector("#temperature");
  let temperature = response.data.temperature.current;
  let cityElement = document.querySelector("#current-city");

  cityElement.innerHTML = response.data.city;

  temperatureElement.innerHTML = Math.round(temperature);
}
function searchCity(city) {
  let apiKey = "033b43a04493c2b0f53e8fe8bdote92d";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(currentWeatherDetails);
}

function search(event) {
  event.preventDefault();
  let searchFormInputElement = document.querySelector("#search-form-input");

  searchCity(searchFormInputElement.value);
}
let searachFormElement = document.querySelector("#search-form");
searachFormElement.addEventListener("submit", search);

searchCity("Perth");
