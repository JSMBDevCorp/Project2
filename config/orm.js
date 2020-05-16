// Import MySQL connection.
var connection = require("../config/connection.js");
const axios = require("axios");
var queryStocks = [];  //This drives the display!
var orm = {
    allStock: function(tableInput, cb) {
      var queryString = "SELECT symbol FROM stockwatch";
        console.log(queryString)
        console.log(tableInput)
        connection.query(queryString, tableInput, function(err, result) {
        if (err) throw err;
        getStockData(toArray(result), cb);
        queryStocks=[];
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
      queryString +=  buyPrice + ',';
      queryString +=  sellPrice + ');';
      console.log(queryString);
      connection.query(queryString, function(err, result){
        if (err) throw err;
        cb(result);
      });
      //How to get the computer to go back to the main view?

    },
    
    limitStock: function(tableOne, tableTwo, cb) {
      var queryString = "SELECT symbol, name, imageURL, currentPrice, limitprice FROM stockwatch RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true";
        console.log(queryString)
        console.log(tableOne, tableTwo)
      connection.query(queryString, function(err, result) {
        if (err) throw err;
          cb(result)
      });
    },

    delete: function(table, condition, cb) {
    
      connection.query(`DELETE FROM ${table} WHERE ${condition}`, function(err, result) {
        if (err) {
          throw err;
        }
  
        cb(result);
      });
    }
};

//One Async funtion to populate all the data in the array.
function toArray(objArray){
  var stocksArray = [];
  for (var i = 0; i <objArray.length; i++){
    stocksArray.push(objArray[i].symbol);;
  } 
  return stocksArray;
};

function convertToString(array){
  var queryString = array[0];
  for (var i = 1; i < array.length; i++){
    queryString += ',' + array[i];
  }
  return queryString;
}

async function getStockData(arrayOfStocks, cb){
  for (const stock of arrayOfStocks){
    var queryString = 'https://fmpcloud.io/api/v3/company/profile/' + stock.toString().toUpperCase() + '?apikey=eb3eefc1b336a9ab7f2a8d082912d098';
    let res = await axios.get(queryString);
    var stockObj = {};
    stockObj.symbol = res.data.symbol;
    stockObj.price = res.data.profile.price;
    stockObj.companyName = res.data.profile.companyName;
    stockObj.imageURL = res.data.profile.image;
    stockObj.changes = res.data.profile.changes
    queryStocks.push(stockObj);
  }
  cb(queryStocks);
}

  
// Export the orm object for the model (stock.js).
  module.exports = orm;