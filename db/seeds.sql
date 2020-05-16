
INSERT INTO setlimit (loggedprice, limitprice, limitcross)
VALUES (435.55, 420.00, false),(310.13, 275.00, true),(1384.34, 1400.00, false), (72.32, 67.00, true);

INSERT INTO stockwatch (symbol, name, limitprice_id, CurrentPrice, imageURL)
VALUES ("FB", "Facebook Inc.", null, 210.1,  "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg"),
("AAPL", "Apple Inc.", 2, 311.41,  "https://financialmodelingprep.com/images-New-jpg/FB.jpg"),
("NFLX", "Netflix Inc.", 1, 431.82,  "https://financialmodelingprep.com/images-New-jpg/NFLX.jpg"), 
("GOOGL", "Alphabet Inc.", 3, 1375.18,  "https://financialmodelingprep.com/images-New-jpg/GOOGL.jpg"),
("UAL", "United Airlines Holdings, Inc.", 4, 22.76,  "https://financialmodelingprep.com/images-New-jpg/UAL.jpg");

SELECT symbol, name, currentPrice, limitprice AS `Limit`
FROM stockwatch
RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true;



