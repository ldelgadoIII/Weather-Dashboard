// DEPENDENCES ==========================
let fiveDayDisplay = $(".fiveDay");

// STARTING DATA ========================
let fiveDayURL =
  "https://api.openweathermap.org/data/2.5/forecast?q=" +
  city +
  "&appid=" +
  APIKey;

// FUNCTIONS ============================
// Request five-day weather info
$.ajax({
  url: fiveDayURL,
  method: "GET",
}).then(function (response) {
  console.log(response);
});

// Display five day forcast cards
for (let i = 0; i < 5; i++) {
  let newDiv = $('<div class= "col-md-2">');
  newDiv.html(`<div class="card text-white bg-primary mb-3" style="max-width: 18rem">
    <div class="card-body">
      <h5 class="card-title">Primary card title</h5>
      <p class="card-text">
        Some quick example text to build on the card title and
        make up the bulk of the card's content.
      </p>
    </div>`);
  fiveDayDisplay.append(newDiv);
}

// USER INTERACTIONS ====================

// INITIALIZATION =======================
