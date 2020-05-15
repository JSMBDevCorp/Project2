var express = require("express");

var router = express.Router();
// Import the model (stock.js) to use its database functions.
var stocks = require("../models/stock.js");

router.get("/", function(req, res) {
    stocks.allStock(function(data) {

        //console.log(data)
        
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

      // console.log(data[0])
    var stockObject = {
      stock: data
    };
    console.log(stockObject.stock[1])
  //   return res.json(stockObject);
    res.render("limit", stockObject);
  });
});
router.post("/api/newStock", function(req, res){
  
  var obj = req.body;
  console.log(req.body);
  
  stocks.create(obj, function(result){
    console.log("Hello 27");
    res.json(result);
  });
  console.log("Clicked on add stock");
})

module.exports = router;