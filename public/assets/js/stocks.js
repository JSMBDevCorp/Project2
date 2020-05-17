// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var sellLimit = $("#sellPrice").val().trim();
    var buyLimit = $("#buyPrice").val().trim();
    
    // validation for sellLimit and buyLimit
    if (sellLimit == ""){
      sellLimit = "null"
    }
    if (buyLimit == ""){
      buyLimit = "null"
    }

    console.log("Clicked on submit");
    var newStock = {
      symbol: $("#stockSymbol").val().trim(),
      sellPrice: sellLimit,
      buyPrice: buyLimit
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

    // send the delete request.
    $.ajax("/" + id, {
      type: "DELETE",
    }).then(
      function() {
        console.log("deleted stock #" + id);
        // Reload the page to get the updated list
        location.reload();
      }
    );
  });

});


