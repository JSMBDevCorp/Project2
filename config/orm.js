// Import MySQL connection.
var connection = require("../config/connection.js");

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
    create: function(tableName, obj, cb){
      //company name, symbol, limitprice, currentprice, imageurl
      var name = obj.companyName;
      var symbol = obj.symbol;
      var limitPrice = obj.maxPrice;
      var currentPrice = obj.currentPrice;
      var imageURL = obj.image;
      var queryString = "INSERT INTO " + tableName.toString();
      queryString += " (name, symbol, LimitPrice, CurrentPrice, imageURL)";
      queryString += "VALUES (\"";
      queryString +=  name  + '", "';
      queryString +=  symbol.toString()  + '",';
      queryString +=  limitPrice + ',';
      queryString +=  currentPrice+ ', "';
      queryString +=  imageURL + '");';
      console.log(queryString);
      connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
      });
    }
    
};
  
  
// Export the orm object for the model (stock.js).
  module.exports = orm;