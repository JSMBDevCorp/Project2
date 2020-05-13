DROP DATABASE IF EXISTS stockwatch;
-- Creates the "stockwatch" database --
CREATE DATABASE stockwatch;

-- Makes it so all of the following code will affect stockwatch --
USE stockwatch;


CREATE TABLE setLimit (
	id INTEGER NOT NULL AUTO_INCREMENT,
    loggedprice DECIMAL(7,2) NULL,
    limitprice DECIMAL(7,2) NULL,
    limitcross BOOLEAN,
    PRIMARY KEY (id)
);

-- Creates the table "stockwatch" within "stockwatch" database --
CREATE TABLE stockwatch (
  id INTEGER NOT NULL AUTO_INCREMENT,
  stockSymbol VARCHAR(5),
  stockName VARCHAR(40),
  price DECIMAL(7,2) NOT NULL,
  limitprice_id INTEGER(7),
  image LONGBLOB,
  PRIMARY KEY (id),
  FOREIGN KEY (limitprice_id) REFERENCES setLimit(id)
);

CREATE TABLE inRange (
	id INTEGER NOT NULL AUTO_INCREMENT,
    limitcross BOOLEAN,
    PRIMARY KEY (id)
);

ALTER TABLE stockwatch
ADD FOREIGN KEY (limitprice_id) REFERENCES setLimit(id) ON UPDATE CASCADE;




