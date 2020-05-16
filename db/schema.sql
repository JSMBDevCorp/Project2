DROP DATABASE IF EXISTS stockwatch_db;
-- Creates the "stockwatch" database --
CREATE DATABASE stockwatch_db;

-- Makes it so all of the following code will affect stockwatch --
USE stockwatch_db;

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
  name VARCHAR(255) NOT NULL,
  symbol VARCHAR(5),
  limitprice_id INTEGER(7),
  currentPrice DECIMAL(10, 2) NOT NULL,
  imageURL VARCHAR(2083) NOT NULL,
  PRIMARY KEY (id),
  FOREIGN KEY (limitprice_id) REFERENCES setLimit(id)
);







