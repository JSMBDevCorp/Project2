DROP DATABASE IF EXISTS stockwatch_db;
-- Creates the "stockwatch" database --
CREATE DATABASE stockwatch_db;

-- Makes it so all of the following code will affect stockwatch --
USE stockwatch_db;

-- Jee's
CREATE TABLE stockwatch (
  id INTEGER NOT NULL AUTO_INCREMENT,
  symbol VARCHAR(255) NOT NULL,
  sellPrice DECIMAL(10,2) NOT NULL,
  buyPrice DECIMAL(10, 2) NOT NULL,
  PRIMARY KEY (id)
);

