// DEPENDENCES ==========================
let searchBarVal = $("#searchBar");
let recentSearchArea = $(".searchGroup");

// STARTING DATA ========================
let recentSearches = [];

// FUNCTIONS ============================
if (recentSearches) {
  recentSearches = JSON.parse(localStorage.getItem("Saved-Searches"));
  recentSearches.forEach((element) => {
    // Create new button
    let newDiv = $(
      `<button class="p-3 border container-fluid text-start recent">`
    );
    newDiv.html(element.search);
    recentSearchArea.prepend(newDiv);
  });
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
  displayRecentSearches();
});

// INITIALIZATION =======================

// when search button is clicked, save text area to local storage
// unshift
