function search(event) {
  event.preventDefault();
  let searchFormInputElement = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchFormInputElement.value;
}
let searachFormElement = document.querySelector("#search-form");
searachFormElement.addEventListener("submit", search);
