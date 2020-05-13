// Import MySQL connection.
var connection = require("./connection.js");

var orm = {
    allStock: function(tableInput, cb) {
      var queryString = "SELECT * FROM ??";
        console.log(queryString)
        console.log(tableInput)
      connection.query(queryString, tableInput, function(err, result) {
        if (err) throw err;
          cb(result)
      });
    },
    
    limitStock: function(tableOne, tableTwo, cb) {
      var queryString = "SELECT stockSymbol, stockName, image, price, limitprice FROM stockwatch RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true";
        console.log(queryString)
        console.log(tableOne, tableTwo)
      connection.query(queryString, function(err, result) {
        if (err) throw err;
          cb(result)
      });
    },
};
  
  
// Export the orm object for the model (stock.js).
  module.exports = orm;