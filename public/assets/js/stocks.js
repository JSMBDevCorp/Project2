// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {

    $(".create-form").on("submit", function(event) {
        // Make sure to preventDefault on a submit event.
        event.preventDefault();

        console.log("Clicked on submit");
        var symbolcheck = $("#stockSymbol").val().trim();
        var sellLimit = $("#sellPrice").val().trim();
        var buyLimit = $("#buyPrice").val().trim();
        
        // validation for sellLimit and buyLimit
        if (sellLimit == ""){
            sellLimit = "null"
        }
        if (buyLimit == ""){
            buyLimit = "null"
        }

        // Ajax new stock
        if (symbolcheck !="") {
            var newStock = {
                symbol: symbolcheck,
                sellPrice: sellLimit,
                buyPrice: buyLimit
            };
            $.ajax("/api/newStock", {
                type: "POST",
                data: newStock
            }).then(
                function() {
                    console.log("created new stock");
                }
            );
        }
        else {
          console.log("STOCK SYMBOL NOT ENTERED")
        }
    });

    //  get stock info to display on update.handlebars
    $(".update").on("click", function(event){
        // Make sure to preventDefault on a click event.
        // event.preventDefault();
        console.log("Clicked on update!")
        
        var id = $(this).data("id");
        console.log(id);
        var updateStock = {name:id};
        // var queryURL = "https://fmpcloud.io/api/v3/company/profile/" + id.toString() + "?apikey=eb3eefc1b336a9ab7f2a8d082912d098";
        // console.log(queryURL);
        $.ajax("/api/updateStock/" + id, {
            type: "DELETE",
            // data: updateStock
        }).then(function(){
        // }).then(function(response){
            window.location.assign("api");
            // $("#stockImage").attr("src",link);
            // alert(response.profile.price)
          //window.location.assign("/api/updateStock");
        })
        //console.log(queryStocks);
        //Now make a post request to the server and look through the queryStocks array for
        //that stock object and give it to update.handlebars to render.
    
        //then in the update.handbars, once clicked update, we make the change to the actual data
        //base.  DONE!
    })

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


