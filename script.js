// DEPENDENCES ==========================
let weatherDetails = $(".weather-details");
let cityNameHeader = $(".cityName");

// STARTING DATA ========================
let city = "Chicago";
let lat = 0;
let lon = 0;
let APIKey = "27c3f1b88c0950432250ead2579926a4";
let queryUV =
  "http://api.openweathermap.org/data/2.5/uvi?lat=" +
  lat +
  "&lon=" +
  lon +
  "&appid=" +
  APIKey;
let queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey +
  "&units=imperial";

// FUNCTIONS ============================
cityNameHeader.html(city + " (1/26/2021)");

// Request current weather info
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  displayMainWeather(response);
  displayUV(response);
});

function displayMainWeather(response) {
  let newDiv = $("<div>");
  newDiv.html(`<div>Temperature: ${response.main.temp}</div>
  <div>Humidity: ${response.main.humidity}</div>
  <div>Wind Speed: ${response.wind.speed}</div>`);
  weatherDetails.append(newDiv);
}

// Request UV info
$.ajax({
  url: queryUV,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

function displayUV(response) {
  let newDiv = $("<div>");
  newDiv.html(`<div>UV Index: ${response.value}</div>`);
  weatherDetails.append(newDiv);
}

// USER INTERACTIONS ====================
// INITIALIZATION =======================
// check if there is anything stored in local storage
