// create initial array

var movies = ["There Will Be Blood", "Eternal Sunshine of the Spotless Mind", "Paths of Glory", "Oldboy", "Repo Man", "Sicario", "Maltese Falcon"];

// new movie added into the input field
var button;
var newMovie = ""; 


// function that will create new buttons from the movies array
var buttonMaker = function (){
	// the previous div elements are emptied 
	 $("#buttonArea").empty();
	// loops through the array and creates buttons
	for(i = 0; i < movies.length; i++) {
		button = $("<button type=" + "button" + ">" + movies[i] + "</button>").addClass("btn btn-warning").attr("data",movies[i]);
		$("#buttonArea").append(button);
	};
}


// The user clicks on a generated a button, which generates 5 static gif images from the GIPHY API and places them on the page. 
$("#buttonArea").on("click", ".btn", function(){
  		var needThis = $(this).attr("data");
  		var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + needThis + "&api_key=cJnSNW7hTSPwWXTIlkH0nCU4XCWoFEIB&limit=5";



  		$.ajax({
  			url: queryURL,
  			method: "GET" 

  		}).done(function(response){
  			console.log(response);
  			
          	var results = response.data;

          	for (var i = 0; i < results.length; i++) {
          		// a div is created to hold a gif of any topic
	          	var movieDiv = $("<div>");
	 			
	          	// put rating under each gif
	 			var p = $("<p>");
	 			p.text(results[i].rating);
	 			var p = $("<p>").text("Rating: " + results[i].rating);

	 			// add a CSS style to create colored borders around the gifs
	 			var topicGif = $("<img>");

	 			// add states of animate and still which will be toggled 
	 			topicGif.attr("src", results[i].images.fixed_height_still.url);
	 			topicGif.attr("data-still", results[i].images.fixed_height_still.url);
	 			topicGif.attr("data-animate", results[i].images.fixed_height.url)
	 			topicGif.attr("data-state", "still")
	 			topicGif.addClass("gif");
	 			
	 			// image is appended to the div
	 			movieDiv.append(topicGif);
	 			// rating is appended to the div below the gif
	 			movieDiv.append(p); 			
	 			// new images will be placed at the beginning (top) of the containing gif area
	 			$("#gifArea").prepend(movieDiv);
 			}
  		})
  })


// When the user clicks one of the still GIPHY images, and it animates. When the user clicks the gif again, it stops playing.
$("#gifArea").on("click", ".gif", function(event){
	event.preventDefault();
	
	// gets the current state of the clicked gif 
	var stateOf = $(this).attr("data-state");
	
	// according to the current state gifs toggle between animate and still 
	if (stateOf === "still") {
    $(this).attr("src", $(this).attr("data-animate"));
    $(this).attr("data-state", "animate");
  } else {
    $(this).attr("src", $(this).attr("data-still"));
    $(this).attr("data-state", "still");
  }

})
   

// The form takes the value from the input box and adds it into the movies array. The buttonMaker function is called that takes each topic in the array remakes the buttons on the page.


$(".submit").on("click", function(event){
	event.preventDefault();

	console.log("submit");
	// sets inputted value to newMovie 
	newMovie = $("#topic-input").val();
	// new topic is added to the movies array 
	movies.push(newMovie);
	console.log(movies);
	// call the function that creates the new button
	buttonMaker();
});



buttonMaker();