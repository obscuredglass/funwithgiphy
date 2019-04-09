// choices to that off with

var movieChoices = ["Re-Animator", "Thin Red Line", "Repo Man", "Sicario", "Layer Cake", "Trainspotting", "Brick", "Children of Men", "City of God", "Casablanca", "Oldboy", "There Will Be Blood"];
var movieImage = "";

// show the array of choices i've made

var button;
var newMovieChoices = ""; // new movieChoice that will be added via the input field 

// function to create new buttons from the movieChoices array
var buttonGenerator = function (){
	// the previous div elements are emptied 
	 $("#buttonArea").empty();
	// loops through the array and creates buttons
	for(i = 0; i < movieChoices.length; i++) {
		button = $("<button type=" + "button" + ">" + movieChoices[i] + "</button>").addClass("btn btn-warning").attr("data",movieChoices[i]);
		$("#buttonArea").append(button);
	};
}
// The user clicks on a button, which generates 5 static, non-animated gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function(){
  var stuff = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + stuff + "&api_key=cJnSNW7hTSPwWXTIlkH0nCU4XCWoFEIB&limit=5";



  $.ajax({
    url: queryURL,
    method: "GET" 

  }).done(function(response){
    console.log(response);

  // The user clicks on a button, which generates 5 static, non-animated gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function(){
  var stuff = $(this).attr("data");
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + stuff + "&api_key=cJnSNW7hTSPwWXTIlkH0nCU4XCWoFEIB&limit=5";



  $.ajax({
    url: queryURL,
    method: "GET" 

  }).done(function(response){
    console.log(response);

    var spitOut = response.data;

    for (var i = 0; i < spitOut.length; i++) {
      // make a dic to hold the gift
          var topicDiv = $("<div>");
          var p = $("<p>");
          // display the rating of gif
          p.text(spitOut[i].rating);
          var p = $("<p>").text("Rating: " + spitOut[i].);


          var topicGif = $("<img>");

          topicGif.attr("src", spitOut[i].images.fixed_height_still.url);
          topicGif.attr("data-still", spitOut[i].images.fixed_height_still.url);
          topicGif.attr("data-animate", spitOut[i].images.fixed_height_still.url);
          topicGif.attr("data-animate", "still")
          topicGif.addClass("gif");












    }