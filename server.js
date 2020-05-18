// add dependencies npm package express and express-handlbars
var express = require("express");
var exphbs = require("express-handlebars");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Express middleware for static files
app.use(express.static("public"));

https://www.youtube.com/watch?v=2BoSBaWvFhM
var hbs = exphbs.create({
    defaultLayout: "main",

    helpers: {
        getColor: function(changes){
            if (changes > 0) {
                return "#4caf50";  // green
            }
            else if (changes < 0){
                return "#f44336";  // red
            }
            else {
                return "#ffffff";  //white
            }
        },

        getArrow: function(price, sellPrice, buyPrice){
            if (price > sellPrice) {
                return "assets/images/arrow-up.png";
            }
            else if (price < buyPrice){
                return "assets/images/arrow-down.png";
            }
        }
    }
})

// Set Handlebars as the default templating engine.
app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
var routes = require("./controllers/stocksController.js");

app.use(routes);

// Start server so that it can begin listening to client requests.
app.listen(PORT, function() {
    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT);
});