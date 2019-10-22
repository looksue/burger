CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    burgers_id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(255) NOT NULL,
    devoured boolean,
    PRIMARY KEY (burgers_id)
);