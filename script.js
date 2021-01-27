// DEPENDENCES ==========================
let weatherDetails = $(".weather-details");

// STARTING DATA ========================
let city = "chicago";
let APIKey = "27c3f1b88c0950432250ead2579926a4";
let queryURL =
  "https://api.openweathermap.org/data/2.5/weather?q=" +
  city +
  "&appid=" +
  APIKey +
  "&units=imperial";

// FUNCTIONS ============================
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
  displayMainWeather(response);
});

function displayMainWeather(response) {
  let newDiv = $("<div>");
  newDiv.html(`<div>Temperature: ${response.main.temp}</div>
  <div>Humidity: ${response.main.humidity}</div>
  <div>Wind Speed: ${response.wind.speed}</div>`);
  weatherDetails.append(newDiv);
}

// USER INTERACTIONS ====================
// INITIALIZATION =======================
// check if there is anything stored in local storage
