


INSERT INTO stockwatch (symbol, name, limitprice_id, price, changes, imageURL)
VALUES ("FB", "Facebook Inc.", null, 210.1, 4.07, "https://financialmodelingprep.com/images-New-jpg/AAPL.jpg"),
("AAPL", "Apple Inc.", 2, 311.41, -1.83, "https://financialmodelingprep.com/images-New-jpg/FB.jpg"),
("NFLX", "Netflix Inc.", 1, 431.82, 12.24, "https://financialmodelingprep.com/images-New-jpg/NFLX.jpg"), 
("GOOGL", "Alphabet Inc.", 3, 1375.18, 16.2, "https://financialmodelingprep.com/images-New-jpg/GOOGL.jpg"),
("UAL", "United Airlines Holdings, Inc.", 4, 22.76, -0.38, "https://financialmodelingprep.com/images-New-jpg/UAL.jpg"),
("AMD", "Advanced Micro Devices Inc.", 4, 52.12, -0.31, "https://financialmodelingprep.com/images-New-jpg/AMD.jpg"),
("TSLA", "Tesla Inc.", null, 750.77, -4.16, "https://financialmodelingprep.com/images-New-jpg/TSLA.jpg"),
("GM", "General Motors Company", null, 23.63, 0.32, "https://financialmodelingprep.com/images-New-jpg/GM.jpg"),
("UA", "Under Armour, Inc.", null, 7.00, 0, "https://financialmodelingprep.com/images-New-jpg/UA.jpg"),
("JPM", "JPMorgan Chase & Co.", null, 93.7, 0, "https://financialmodelingprep.com/images-New-jpg/JPM.jpg");

SELECT symbol, name, price, limitprice AS `Limit`
FROM stockwatch
RIGHT JOIN setlimit ON stockwatch.limitprice_id = setlimit.id WHERE limitcross = true;


-- Use this here for a sample database
INSERT INTO stockwatch (symbol, sellPrice, buyPrice)
VALUES ( "FB", 300, 200),
("AAPL", 300, 200),
("NFLX", 300, 200), 
("GOOGL", 1350, 1250),
("UA", null, null);





