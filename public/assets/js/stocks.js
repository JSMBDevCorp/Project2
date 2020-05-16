// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  // Function to decide color for currentPrice value
  function priceColor (change) {
    if (change > 0 ) {
      green (change)
    }
    else if (change < 0 ) {
      red (change)
    }
  }

  //Functions for priceColor css colors ..https://www.w3schools.com/jquery/css_css.asp
  function green(){
    $("#price").css({"color":"#4caf50 green"})
  }
  function red(){
    $("#price").css({"color":"#f44336 red"})
  }

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newStock = {
      symbol: $("#stockSymbol").val().trim(),
      maxPrice: $("#maxPrice").val().trim()
    };
    console.log(newStock);
    $.ajax("/api/newStock", {
      type: "POST",
      data: newStock
    }).then(
      function() {
        console.log("created new stock");
        // Reload the page to get the updated list
        //location.reload();
      }
    );
  });

  //Delete stock item
  $(".delete").on("click", function(event) {
    // Make sure to preventDefault on a click event.
    event.preventDefault();
    var id = $(this).data('id');
    console.log(id)
    // send the delete request.
    $.ajax("/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted stock #" + id);
        // Reload the page to get the updated list
        // location.reload();
      }
    );
  });

});
