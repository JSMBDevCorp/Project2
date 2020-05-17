// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //adding a stock to the watch list.
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
        alert(newStock.symbol + " has been added to your stock watchlist.")
        console.log("created new stock");
      }
    );
  });
  /*
  Once the update button is clicked, then a grab the prices and symbol of said stock by finding
  it in the all stocks array and put it in an update object, so write a function that starts with
  initially making the update object empty, 
  Step 1:  Once clicked, then grab that update object.
  Step 2:  Put such in a global update object (this should use a method and at the start should
    make the updateobject empty)
  Step 3:  Driving the update page using that update object (Just the picture and current price)
  Step 4:  Render such page.
  Step 5:  Write a post request for the submit button of the update object to change the database.
  Step 6:  Update the user that the price has been changed.  
  Once a stock is clicked, then I write a for loop to find it on the allstocks array

  
  */




  //updating a stock.
  $(".update-form").on("click", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var id = $(this).data('id');  //Check this, logs it so we get the id which is the stock symbol.

    var newStock = {
      sellPrice: $("#newSellPrice").val().trim(),
      buyPrice: $("#newBuyPrice").val().trim()
    };
    $.ajax("/api/updateStock", {
      type: "GET",
      data: newStock
    }).then(
      function() {
        alert(newStock.symbol + " has been updated to your stock watchlist.")
        console.log("created new stock");
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


