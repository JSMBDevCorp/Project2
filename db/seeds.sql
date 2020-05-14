
INSERT INTO setlimit (loggedprice, limitprice, limitcross)
VALUES (435.55, 420.00, false),(310.13, 275.00, true),(1384.34, 1400.00, false), (72.32, 67.00, true);

INSERT INTO stockwatch (symbol, name, price, limitprice_id, imageURL)
VALUES ("FB", "Facebook Inc.", 210.1, null, "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg"),
("AAPL", "Apple Inc.", 311.41, 2, "https://financialmodelingprep.com/images-New-jpg/FB.jpg"),
("NFLX", "Netflix Inc.", 431.82, 1, "https://financialmodelingprep.com/images-New-jpg/NFLX.jpg"), 
("GOOGL", "Alphabet Inc.", 1375.18, 3, "https://financialmodelingprep.com/images-New-jpg/GOOGL.jpg"),
("UAL", "United Airlines Holdings, Inc.", 22.76, 4, "https://financialmodelingprep.com/images-New-jpg/UAL.jpg");

SELECT stockSymbol, stockName, price, limitprice AS `Limit`
FROM stockwatch
RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true;

-- Jee's DB
INSERT INTO stockwatch (name, symbol, LimitPrice_id, CurrentPrice, imageURL)
VALUES ("Facebook", "FB", 212.35, 200,  "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg"),
( "Apple Inc.", "AAPL", 310.13, 200, "https://financialmodelingprep.com/images-New-jpg/FB.jpg"),
("Netflix Inc.", "NFLX", 435.55, 200, "https://financialmodelingprep.com/images-New-jpg/NFLX.jpg"), 
("Alphabet Inc.", "GOOGL", 1384.34, 200, "https://financialmodelingprep.com/images-New-jpg/GOOGL.jpg");

