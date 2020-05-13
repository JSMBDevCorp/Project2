// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var stock = {
    allStock: function(cb){
        orm.allStock("stockwatch", function(res) {
            cb(res);
        });
    },

    limitStock: function(cb){
        orm.limitStock("stockwatch", "setLimit", function(res) {
            cb(res);
        });
    },
    
}

// Export the database functions for the stockController.js
module.exports = stock;
