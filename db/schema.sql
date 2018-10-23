CREATE DATABASE real_crm_db;

USE real_crm_db;

 
CREATE TABLE agent (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	city VARCHAR(40) NOT NULL,
	phone VARCHAR(60) Not NUll,
	email VARCHAR(60) Not NUll,
	PRIMARY KEY (id)
);


CREATE TABLE client (
	id INT NOT NULL AUTO_INCREMENT,
	first_name VARCHAR(40) NOT NULL,
	last_name VARCHAR(40) NOT NULL,
	city VARCHAR(40) NOT NULL,
	phone VARCHAR(60) Not NUll,
	email VARCHAR(60) Not NUll,
	agent_id INT (10) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (agent_id) REFERENCES agent(id)
);

CREATE TABLE listing (
	id INT NOT NULL AUTO_INCREMENT,
	address VARCHAR(40) NOT NULL,
	price VARCHAR(40) NOT NULL,
	img LONGBLOB,
	post_date DATE NOT NUll,
	sold_date DATE,
	sold_price VARCHAR(60),
	agent_id INT (10) NOT NULL,
	client_id INT (10) NOT NULL,
	PRIMARY KEY (id),
	FOREIGN KEY (agent_id) REFERENCES agent(id)
	FOREIGN KEY (client_id) REFERENCES client(id)
);