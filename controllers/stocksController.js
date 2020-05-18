var express = require("express");

var router = express.Router();
// Import the model (stock.js) to use its database functions.
var stocks = require("../models/stock.js");
var stockToServe = {};
router.get("/", function(req, res) {
    stocks.allStock(function(data) {
      var stockObject = {
        stock: data
      };
      res.render("index", stockObject);
    });
});

router.get("/limit", function(req, res) {
  stocks.limitStock(function(data) {

    var stockObject = {
      stock: data
    };
    res.render("limit", stockObject);
  });
});

router.get("/api", function(req, res) {
  res.render("api");
});
//render the update stock page:
router.get("/api/updateStock", function(req, res){
  var stockToUpdate = req.query.name;

  stocks.updateStock(stockToUpdate, function(result){ //result is the object
    stockToServe = result;
    console.log(stockToServe);
    res.render("update", result);
  });
});
router.get("/api/updateStockNow",function(req, res){
  res.render("update", stockToServe);
  
});

router.post("/api/newStock", function(req, res){
  var obj = {};
  obj.symbol = stockToServe.symbol;
  obj.sellPrice = req.body.sellPrice;
  obj.buyPrice = req.body.buyPrice;
  console.log(obj);
  stocks.updateOneStock(obj);
  res.end();
});

router.put("/api/updateBuySell", function(req, res) {
  console.log("condition");
});

router.delete("/:symbol", function(req, res) {
  var delSymbol = req.params.symbol
  stocks.delete(delSymbol, function(result){
      res.status(200).end();
  })
});

module.exports = router;