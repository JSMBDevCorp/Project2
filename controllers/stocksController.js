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