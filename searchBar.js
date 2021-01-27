// DEPENDENCES ==========================
let searchBarVal = $("#searchBar");
let recentSearchArea = $(".searchGroup");

// STARTING DATA ========================
let recentSearches = [];

// FUNCTIONS ============================
if (localStorage.getItem("Saved-Searches")) {
  recentSearches = JSON.parse(localStorage.getItem("Saved-Searches"));
  recentSearches.forEach((element) => {
    // Create new button
    let newDiv = $(
      `<button class="p-3 border container-fluid text-start recent">`
    );
    newDiv.html(element.search);
    recentSearchArea.prepend(newDiv);
  });

  clickEventRecent();
}

function displayRecentSearches() {
  // Create new button
  let newDiv = $(
    `<button class="p-3 border container-fluid text-start recent">`
  );
  newDiv.html(searchBarVal.val());
  recentSearchArea.prepend(newDiv);

  // Save searches to local storage
  let newSearchObject = {
    search: searchBarVal.val(),
  };
  recentSearches.push(newSearchObject);
  localStorage.setItem("Saved-Searches", JSON.stringify(recentSearches));
}

// USER INTERACTIONS ====================
// Search button event
$("#searchButton").on("click", function (event) {
  event.preventDefault;

  city = searchBarVal.val();
  cityNameHeader.html(city + " " + moment().format("MM/D/YYYY"));

  // Reset displays
  weatherDetails.empty();
  fiveDayDisplay.empty();

  // Call displays
  callWeather();
  callUV();
  callFiveDay();
  displayRecentSearches();
  clickEventRecent();
});

function clickEventRecent() {
  $(".recent").click(function (event) {
    event.preventDefault();

    let recentCity = $(this).html();

    city = recentCity.trim();
    console.log("Clicked: ", city);

    cityNameHeader.html(city + " " + moment().format("MM/D/YYYY"));

    // Reset displays
    weatherDetails.empty();
    fiveDayDisplay.empty();

    // Call displays
    callWeather();
    callUV();
    callFiveDay();
  });
}
