var express = require("express");

var router = express.Router();
// Import the model (stock.js) to use its database functions.
var stocks = require("../models/stock.js");

router.get("/", function(req, res) {
    stocks.allStock(function(data) {
      //console.log(data[0].changes)
      var stockObject = {
        stock: data
      };
      //console.log(stockObject)
    //   return res.json(stockObject);
      res.render("index", stockObject);
    });
});

router.get("/limit", function(req, res) {
  stocks.limitStock(function(data) {
    console.log(data); //log out the data that gets returned by the callback.
    var stockObject = {
      stock: data
    };
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

router.delete("/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("yep");
  stocks.delete(condition, function(result){
    
      res.status(200).end();
  });
});

module.exports = router;