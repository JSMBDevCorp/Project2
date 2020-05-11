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
    
};
  
  
// Export the orm object for the model (stock.js).
  module.exports = orm;