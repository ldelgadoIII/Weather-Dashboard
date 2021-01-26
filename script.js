// DEPENDENCES ==========================
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
  APIKey;
let fiveDayURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  "" +
  "&appid=" +
  APIkey;

// FUNCTIONS ============================
$.ajax({
  url: queryURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

async function getWetherInfo(args) {
  let result;

  try {
    result = await $.ajax({
      url: queryURL,
      type: "GET",
      data: args,
    });

    return result;
  } catch (error) {
    console.error(error);
  }
}

getWetherInfo().then((data) => (savedWeather = data));

console.log(savedWeather);

// when search button is clicked, save text area to local storage
// unshift

// USER INTERACTIONS ====================
// INITIALIZATION =======================
// check if there is anything stored in local storage
