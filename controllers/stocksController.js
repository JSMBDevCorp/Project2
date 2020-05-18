var express = require("express");

var router = express.Router();
// Import the model (stock.js) to use its database functions.
var stocks = require("../models/stock.js");

router.get("/", function(req, res) {
    stocks.allStock(function(data) {

      var stockObject = {
        stock: data
      };
      console.log(stockObject)

      res.render("index", stockObject);
    });
});

router.get("/limit", function(req, res) {
  stocks.limitStock(function(data) {

    var stockObject = {
      stock: data
    };
    console.log(stockObject.stock[1])

    res.render("limit", stockObject);
  });
});

router.get("/api", function(req, res) {
  res.render("api");
});

// router.get("/api/updateStock/:symbol", function(req, res) {
//   res.sendFile(path.join(__dirname, "stockwatch.html"));
// });

router.delete("/api/updateStock/:symbol", function(req, res) {
  var updateSymbol = req.params.symbol
  var stockToUpdate = req.query.name;
  console.log("SC38")
  console.log(updateSymbol);
  console.log(stockToUpdate);

  stocks.updateStock(updateSymbol, function(result){ 
    console.log(result);
  res.render("update", result);
  })
});

//render the update stock page:
// router.get("/api/updateStock", function(req, res){
//   // res.sendFile(path.join(__dirname, "../views/update"));
//   var stockToUpdate = req.query.name;
//   console.log("SC38")
//   console.log(stockToUpdate);
//   stocks.updateStock(stockToUpdate, function(result){ //result is the object
//     console.log("SC42")
//     console.log(result);
//     var stockObject = [
//       result
//     ];
//     console.log(stockObject)
//     // res.redirect("update")
//     // result = []
//     res.render("update", stockObject[0]);
//   });
  
// });

router.post("/api/newStock", function(req, res){
  var obj = req.body;
  console.log(req.body);
  stocks.create(obj, function(result){
    res.json(result);
  });
})

router.delete("/:symbol", function(req, res) {
  var delSymbol = req.params.symbol

  stocks.delete(delSymbol, function(result){
      res.status(200).end();
  })
  
});

module.exports = router;