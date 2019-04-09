var movieChoices = ["Re-Animator", "Thin Red Line", "Repo Man", "Sicario", "Layer Cake", "Trainspotting", "Brick", "Children of Men", "City of God", "Casablanca", "Oldboy", "There Will Be Blood"];
var movieImage = "";

function showButtons () {
  $("#buttonItems").empty();
  $("#movie-input").val("");
  for (var i = 0; i < movieChoices.length; i++) {
      var button = $("<button class='btn btn-primary'>");
      button.addClass("space");
      button.attr("movie-name", movieChoices[i]);
      button.text(movieChoices[i]);
      $("#buttonItems").append(button);
      $("#buttonItems").append(" ");
  }
}
