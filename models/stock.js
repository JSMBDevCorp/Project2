// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");
var apiKey = "eb3eefc1b336a9ab7f2a8d082912d098";
const axios = require("axios");
var stock = {
    allStock: function(cb){
        orm.allStock("stockwatch", function(res) {
            cb(res);
        });
    },
    limitStock: function(cb){
      orm.limitStock("stockwatch", function(res) {
        //console.log(res);  
        cb(res);
      });
    },
    create: function(obj, cb){
        orm.create("stockwatch", obj, function(res){
          cb(res);
        })
    },
    delete: function(condition, cb) {
      orm.delete("stockwatch", condition, function(res) {
        cb(res);
      });
    },
    updateStock: function(stockToUpdate, cb){
      orm.updateStock(stockToUpdate, function(res){
        // console.log("in models");
        //console.log(res);
        cb(res);
      })
    },
    updateOneStock: function(obj){
      orm.updateOneStock(obj);
    }
};

async function getStockData(symbol, obj, cb){
    var queryString = 'https://fmpcloud.io/api/v3/company/profile/' + symbol.toString().toUpperCase() + '?apikey=eb3eefc1b336a9ab7f2a8d082912d098';
    console.log(queryString);
    try{
      let res = await axios.get(queryString);
      //console.log(res.data[0].price);
      obj.currentPrice = res.data.profile.price;
      obj.companyName = res.data.profile.companyName;
      obj.image = res.data.profile.image;
      //console.log(res);
      orm.create("stockwatch", obj, function(res){
        cb(res);
      });
      console.log(obj);
    }catch(err){
      console.log("error retrieving info of " + symbol);
    }
  }

// Export the database functions for the stockController.js
module.exports = stock;
