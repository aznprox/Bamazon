CREATE DATABASE Bamazon;
USE Bamazon;

CREATE TABLE products (
	item_id INT AUTO_INCREMENT NOT NULL,
	product_name VARCHAR(100) NOT NULL,
	department_name VARCHAR(100) NOT NULL,
	price DECIMAL(10,2) NOT NULL,
	stock_quantity INT NOT NULL,
	PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES  ('Cards Against Humanity', 'Toys & Games', 24.99, 250),
		('What Do You Meme? Adult Party Game', 'Toys & Games', 29.99, 340),
		('Nerf N-Strike Gun', 'Toys & Games', 12.99, 200),
		('LEGO BATMAN MOVIE The Batwing', 'Toys & Games', 77.15, 250),
		('Fire TV Stick with Alexa Voice Remote', 'Electronics', 39.99, 500),
		('Echo Dot - Black', 'Electronics', 49.99, 1000),
		('Fujifilm Instax Mini Instant Film', 'Electronics', 10.00, 200),
		('AUKEY 12000mAh Portable Charger', 'Electronics', 25.99, 300),
		('Fire and Fury: Inside the…', 'Books', 19.89, 325),
		('Dog Man and Cat Kid:…', 'Books', 6.40, 325),
		('The Subtle Art of Not…', 'Books', 14.99, 225),
		('Instant Pot Cookbook:…', 'Books', 7.24, 450);