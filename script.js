// DEPENDENCES ==========================
let weatherDetails = $(".weather-details");
let cityNameHeader = $(".cityName");

// STARTING DATA ========================
let city = "Chicago";
let lat = 41.85;
let lon = -87.65;
let APIKey = "27c3f1b88c0950432250ead2579926a4";

// FUNCTIONS ============================
// Request current weather info
function callWeather() {
  let queryURL =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  $.ajax({
    url: queryURL,
    method: "GET",
  }).then(function (response) {
    console.log(response);
    lat = response.coord.lat;
    lon = response.coord.lon;
    displayMainWeather(response);
  });
}

function displayMainWeather(response) {
  let newDiv = $("<div>");
  newDiv.html(`<div class="tempItem">Temperature: ${response.main.temp}</div>
  <div class="tempItem">Humidity: ${response.main.humidity}</div>
  <div class="tempItem">Wind Speed: ${response.wind.speed}</div>`);
  weatherDetails.append(newDiv);
}

// Request UV info
function callUV() {
  let queryUV =
    "http://api.openweathermap.org/data/2.5/uvi?lat=" +
    lat +
    "&lon=" +
    lon +
    "&appid=" +
    APIKey;

  $.ajax({
    url: queryUV,
    method: "GET",
  }).then(function (response) {
    displayUV(response);
  });
}

function displayUV(response) {
  let newDiv = $("<div>");
  newDiv.html(
    `<div class="tempItem">UV Index: <span class="uvState">${response.value}</span></div>`
  );
  weatherDetails.append(newDiv);

  if (response.value >= 7) {
    $(".uvState").attr("style", "background: violet");
  } else if (response.value > 3 && response.value < 7) {
    $(".uvState").attr("style", "background: yellow");
  } else {
    $(".uvState").attr("style", "background: greenyellow");
  }
}

// USER INTERACTIONS ====================
// INITIALIZATION =======================
// check if there is anything stored in local storage
