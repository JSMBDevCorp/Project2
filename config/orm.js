// Import MySQL connection.
var connection = require("../config/connection.js");
const axios = require("axios");
var queryStocks = [];  //This drives the display!
var filterDisplay = []; //This drives the filtered stocks!

var orm = {
    allStock: function(tableInput, cb) {
      queryStocks=[];
      var queryString = "SELECT * FROM stockwatch";

      connection.query(queryString, tableInput, function(err, result) {
      if (err) throw err;
      getStockData(result, cb);
      });
    },
    
    create: function(tableName, obj, cb){
      var symbol = obj.symbol;
      var buyPrice = obj.buyPrice;
      var sellPrice = obj.sellPrice;
      var imageURL = obj.image;
      var queryString = "INSERT INTO " + tableName.toString();
      queryString += " (symbol, sellPrice, buyPrice)";
      queryString += "VALUES (\"";
      queryString +=  symbol.toString()  + '",';
      queryString +=  sellPrice + ',';
      queryString +=  buyPrice + ');';
      console.log(queryString);
      connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
      });
      //How to get the computer to go back to the main view?
    },
    
    limitStock: function(tableName, cb) {
      filterStocks(queryStocks);
      cb(filterDisplay);
      /*
      connection.query(queryString, function(err, result) {
        if (err) throw err;
          cb(result)
      });*/
    },

    delete: function(tableInput, delSymbol, cb) {
      var queryString = "DELETE FROM ?? WHERE symbol = ?";

      connection.query(queryString, [tableInput, delSymbol], function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);

      });
    }
};
//filterStocks(queryStocks);
//Need to Check this with some actual values.
function filterStocks(queryStocks){
  filterDisplay = [];
  queryStocks.forEach(stock => {
    console.log(stock.sellPrice);
    if (parseFloat(stock.price) < stock.buyPrice && stock.buyPrice != null || parseFloat(stock.price) > stock.sellPrice && stock.sellPrice != null){
      filterDisplay.push(stock);
    }
  });
  console.log("Stocks in the filtered array");
  console.log(filterDisplay);
};


function convertToString(array){
  var queryString = array[0];
  for (var i = 1; i < array.length; i++){
    queryString += ',' + array[i];
  }
  return queryString;
}
//Ok! One can do it here!
async function getStockData(arrayOfStocks, cb){
  for (const stock of arrayOfStocks){
    var queryString = 'https://fmpcloud.io/api/v3/company/profile/' + stock.symbol.toString().toUpperCase() + '?apikey=eb3eefc1b336a9ab7f2a8d082912d098';
    let res = await axios.get(queryString);
    console.log("Let's check the stock!");
    console.log(stock);
    // https://www.w3schools.com/jsref/jsref_tofixed.asp
    var axiosPrice = res.data.profile.price;
    var moneyPrice = axiosPrice.toFixed(2);
    var stockObj = {};
    stockObj.sellPrice = stock.sellPrice;
    stockObj.buyPrice = stock.buyPrice;
    
    stockObj.symbol = res.data.symbol;
    stockObj.price = moneyPrice;
    stockObj.companyName = res.data.profile.companyName;
    stockObj.imageURL = res.data.profile.image;
    stockObj.changes = res.data.profile.changes
    queryStocks.push(stockObj);
  }
  cb(queryStocks);
};

 
// Export the orm object for the model (stock.js).
  module.exports = orm;