// DEPENDENCES ==========================
let weatherDetails = $(".weather-details");
let cityNameHeader = $(".cityName");
let fiveDayDisplay = $(".fiveDay");
let icon;

// STARTING DATA ========================
let city;
let lat;
let lon;
let APIKey = "27c3f1b88c0950432250ead2579926a4";

// FUNCTIONS ============================
function init() {
  // check if there is anything stored in local storage
  // Set default values
  city = "Chicago";
  lat = 41.85;
  lon = -87.65;
  cityNameHeader.html(city + " " + moment().format("MM/D/YYYY"));

  // Call displays
  callWeather();
  callUV();
  callFiveDay();
}

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

// Request five-day weather info
function callFiveDay() {
  let fiveDayURL =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&appid=" +
    APIKey +
    "&units=imperial";

  $.ajax({
    url: fiveDayURL,
    method: "GET",
  }).then(function (response) {
    displayFiveDay(response);
  });
}

// Display five day forecast cards
function displayFiveDay(response) {
  for (let i = 0; i < 40; i += 8) {
    // Set cloudiness icon
    if (response.list[i].clouds.all <= 30) {
      icon = "fa-sun";
    } else if (response.list[i].clouds.all <= 90) {
      icon = "fa-cloud-sun";
    } else {
      icon = "fa-cloud";
    }

    // Create five-day forecast cards
    let newDiv = $('<div class= "col-md-2">');
    newDiv.html(`<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Primary card title</h5>
        <i class="fas ${icon} fa-7x icons"></i>  
        <div class="card-text">
          Temp: ${response.list[i].main.temp}
          </div>
          <div class="card-text">
          Humidity: ${response.list[i].main.humidity}
          </div>
      </div>`);
    fiveDayDisplay.append(newDiv);
  }
}

// INITIALIZATION =======================
init();
