var express = require("express");

var router = express.Router();
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
router.get("/api/updateStock", function(req, res){
  var stockToUpdate = req.query.name;
  stocks.updateStock(stockToUpdate, function(result){ 
    stockToServe = result;
    console.log(stockToServe);
    res.render("update", result);
  });
});
router.get("/updateStockNow",function(req, res){
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
router.post("/api/addOneStock", function(req, res){
  stocks.create(req.body, function(result){
    console.log("logging right before the create function");
    console.log(result);
    //res.end();
  })
})

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