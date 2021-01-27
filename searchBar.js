// DEPENDENCES ==========================
let searchBarVal = $("#searchBar");
let recentSearchArea = $(".searchGroup");

// STARTING DATA ========================
let recentSearches = [];

console.log(recentSearches);

// FUNCTIONS ============================
if (localStorage.getItem("Saved-Searches")) {
  recentSearches = JSON.parse(localStorage.getItem("Saved-Searches"));
  recentSearches.forEach((element) => {
    // Create new button
    let newDiv = $(
      `<button class="p-3 border container-fluid text-start" id="recent">`
    );
    newDiv.html(element.search);
    recentSearchArea.prepend(newDiv);
  });
}

function displayRecentSearches() {
  // Create new button
  let newDiv = $(
    `<button class="p-3 border container-fluid text-start" id="recent">`
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
});

$("#recent").click(function (event) {
  event.preventDefault;

  console.log("Clicked!");
});
