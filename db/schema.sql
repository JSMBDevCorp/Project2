DROP DATABASE IF EXISTS stockwatch_db;
-- Creates the "stockwatch" database --
CREATE DATABASE stockwatch_db;

-- Makes it so all of the following code will affect burgers_db --
USE stockwatch_db;

-- Creates the table "burgers" within burgers_db --
CREATE TABLE stockwatch (
  id INTEGER NOT NULL AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL,
  symbol VARCHAR(255) NOT NULL,
  LimitPrice DECIMAL(10,2) NOT NULL,
  CurrentPrice DECIMAL(10, 2),
  imageURL VARCHAR(2083) NOT NULL,
  PRIMARY KEY (id)
);
