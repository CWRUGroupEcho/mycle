### Schema

USE mycle_db;

-- CREATE TABLE locations
-- (
-- 	id int NOT NULL AUTO_INCREMENT,
-- 	name varchar(50) NOT NULL,
-- 	description varchar(250) NOT NULL,
--  adress varchar(250) NOT NULL,
--  picture_url varchar(250) NOT NULL,
-- 	PRIMARY KEY (id)
-- );
/* 
CREATE TABLE reviews
(
    id int NOT NULL AUTO_INCREMENT,
	author varchar(50) DEFAULT "Guest",
	review varchar(250) NOT NULL,
    created_at DATE,
    PRIMARY KEY (id)
); */

ALTER TABLE locations
ADD COLUMN likes int DEFAULT 0 AFTER picture_url;
