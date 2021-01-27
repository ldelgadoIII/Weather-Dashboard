// DEPENDENCES ==========================
let searchBarVal = $("#searchBar");

// STARTING DATA ========================
let recentSearches = [];

// FUNCTIONS ============================

// USER INTERACTIONS ====================
$("#searchButton").on("click", function (event) {
  event.preventDefault;

  city = searchBarVal.val();
  cityNameHeader.html(city + " (1/26/2021)");

  // Reset displays
  weatherDetails.empty();
  fiveDayDisplay.empty();

  // Call displays
  callWeather();
  callUV();
  callFiveDay();
});

// INITIALIZATION =======================

// when search button is clicked, save text area to local storage
// unshift
