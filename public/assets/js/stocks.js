// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
  //adding a stock to the watch list.
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
        alert(newStock.symbol + " has been added to your stock watchlist.")
        console.log("created new stock");
      }
    );
  });
  $(".update.btn-update").on('click', function(event){
    event.preventDefault();
    console.log("Clicked on update!")
    var id = $(this).data('id');
    console.log(id);
    var updateStock = {name:id};
    $.ajax("/api/updateStock", {
      type: "GET",
      data: updateStock
    }).then(function(req, res){
      console.log(res);
      window.location.assign("/api/updateStockNow");
      
    })
  });
  $(".update-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();
    var sellLimit = $("#newSellPrice").val().trim();
    var buyLimit = $("#newBuyPrice").val().trim();
    console.log(sellLimit);
    
    var newStock = {
      
      sellPrice: sellLimit,
      buyPrice: buyLimit
    };

    $.ajax("/api/newStock", {
      type: "POST",
      data: newStock
    }).then(
      function(req, res) {
        alert("stock is updated.")
        //console.log(res);
      }
    );
  });
  /*
  $(".btn").on("click", function(event){
    event.preventDefault();
    var sellLimit = $("#newSellPrice").val().trim();
    var buyLimit = $("#newBuyPrice").val().trim();
    var updateObj={
      newSellPrice: sellLimit,
      newBuyPrice: buyLimit
    };
    console.log(updateObj);
    $.ajax("/api/newStock", {
      type: "POST",
      data:updateObj
    }).then(){
      alert("Buy and Sell prices are updated.");
    }

  });*/
  //Delete stock item
  $(".delete").on("click", function(event) {
    // Make sure to preventDefault on a click event.
    event.preventDefault();
    var id = $(this).data('id');
    console.log(id);
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


