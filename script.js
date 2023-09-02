// Feature 1
let now = new Date();

let hour = now.getHours();
let date = now.getDate();

function addZero(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
let minutes = addZero(now.getMinutes());

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
let month = months[now.getMonth()];

let fullDate = document.querySelector("#full-date");
fullDate.innerHTML = `${day}, ${month} ${date}, ${hour}:${minutes}`;

// Feature 2
let cityForm = document.querySelector("#search-form");
let cityInput = document.querySelector("#search-line");
let cityOutput = document.querySelector("#city-output");

function outputCity(event) {
  event.preventDefault();
  cityOutput.innerHTML = `${cityInput.value}`;
}

cityForm.addEventListener("submit", outputCity);

// Feature 3
let celcius = document.querySelector("a#celcius");
let fahrenheit = document.querySelector("a#fahrenheit");
let tempOutput = document.querySelector("#temp-output");

celcius.addEventListener("click", celciusTemp);
function celciusTemp(event) {
  event.preventDefault();
  tempOutput.innerHTML = `26°`;
}

fahrenheit.addEventListener("click", fahrenheitTemp);
function fahrenheitTemp(event) {
  event.preventDefault();
  tempOutput.innerHTML = `79°`;
}
