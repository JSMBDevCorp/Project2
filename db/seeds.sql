INSERT INTO setlimit (loggedprice, limitprice, limitcross)
VALUES (435.55, 420.00, false),(310.13, 275.00, true),(1384.34, 1400.00, false), (72.32, 67.00, true);

INSERT INTO stockwatch (stockSymbol, stockName, price, limitprice_id, image)
VALUES ("FB", "Facebook Inc.", 210.1, null, "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg"),
("AAPL", "Apple Inc.", 311.41, 2, "https://financialmodelingprep.com/images-New-jpg/FB.jpg"),
("NFLX", "Netflix Inc.", 431.82, 1, "https://financialmodelingprep.com/images-New-jpg/NFLX.jpg"), 
("GOOGL", "Alphabet Inc.", 1375.18, 3, "https://financialmodelingprep.com/images-New-jpg/GOOGL.jpg"),
("UAL", "United Airlines Holdings, Inc.", 22.76, 4, "https://financialmodelingprep.com/images-New-jpg/UAL.jpg");

SELECT stockSymbol, stockName, price, limitprice AS `Limit`
FROM stockwatch
RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true;