$("button").on("click", function() {
    let person = $(this).attr("data-person");
    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election" +
      person + "&api-key=b9619935-d70b-4f7e-a744-af95b9c4c3ee";

    $.ajax({
      url: queryURL,
      method: "GET"
    })
      .then(function(response) {
        var results = response.data;
        console.log(response.data);

        for (var i = 0; i < results.length; i++) {
          var gifDiv = $("<div>");

          var rating = results[i].rating;

          var p = $("<p>").text("Rating: " + rating);

          var personImage = $("<img>");
          personImage.attr("src", results[i].images.fixed_height.url);

          gifDiv.prepend(p);
          gifDiv.prepend(personImage);

          $("#gifs-appear-here").prepend(gifDiv);
        }
      });
  });