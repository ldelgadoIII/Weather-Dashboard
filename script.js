// DEPENDENCES ==========================
let weatherDetails = $(".weather-details");
// search button
// temperature textarea
// humidity textarea
// wind speed textarea
// uv index textarea
// five day forcast textarea
// STARTING DATA ========================
let savedWeather;
let recentSearches = [];
let city = "chicago";
let temerature = 0;
let humidity = 0;
let windSpeed = 0;
let uvIndex = 0;
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

// when search button is clicked, save text area to local storage
// unshift

// USER INTERACTIONS ====================
// INITIALIZATION =======================
// check if there is anything stored in local storage
