DROP DATABASE IF EXISTS stockwatch;
-- Creates the "stockwatch" database --
CREATE DATABASE stockwatch;

-- Makes it so all of the following code will affect burgers_db --
USE stockwatch;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE stockwatch (
  id INTEGER NOT NULL AUTO_INCREMENT,
  stockSymbol VARCHAR(5),
  stockName VARCHAR(40),
  price DECIMAL(7,2) NOT NULL,
  image LONGBLOB,
  PRIMARY KEY (id)
);
