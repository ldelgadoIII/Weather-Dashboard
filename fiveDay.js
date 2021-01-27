// DEPENDENCES ==========================
let fiveDayDisplay = $(".fiveDay");
let icon;

// FUNCTIONS ============================
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
