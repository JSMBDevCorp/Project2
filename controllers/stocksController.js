var express = require("express");

var router = express.Router();

// Import the model (stock.js) to use its database functions.
var stock = require("../model/stock.js");

router.get("/", function(req, res) {
    stock.allStock(function(data) {

        console.log(data)
      var stockObject = {
        stock: data
      };
      // console.log(stockObject)
    //   return res.json(stockObject);
      res.render("index", stockObject);
    });
});

router.get("/limit", function(req, res) {
  stock.limitStock(function(data) {

      // console.log(data[0])
    var stockObject = {
      stock: data
    };
    console.log(stockObject.stock[1])
  //   return res.json(stockObject);
    res.render("limit", stockObject);
  });
});

module.exports = router;