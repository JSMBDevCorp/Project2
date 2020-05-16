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
    $(".stockprice").css({"color":"#4caf50 green"})
  }
  function red(){
    $(".stockprice").css({"color":"#f44336 red"})
  }

  $(".update").on("click", function(event) {
    //console.log(event.target.getAttribute('dataid'));
    var id = $(this).data('id');
    console.log(id);
    //make a modal and take in two values sellprice and buyprice, wrap into an object
    //make a put request and update the values in the database and also the stockdisplay
    //array.
    //then pull the 
  });



  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    console.log("Clicked on submit");
    var newStock = {
      symbol: $("#stockSymbol").val().trim(),
      sellPrice: $("#sellPrice").val().trim(),
      buyPrice: $("#buyPrice").val().trim()
    };
    $.ajax("/api/newStock", {
      type: "POST",
      data: newStock
    }).then(
      function() {
        console.log("created new stock");
        //location.href = "localhost:8080";  //blah!
        // Reload the page to get the updated list
        //location.reload();  //** I want to serve back up the homepage, how to do that here? */
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


