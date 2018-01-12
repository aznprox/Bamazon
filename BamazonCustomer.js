var inquirer = require("inquirer");
var mysql = require("mysql");
var connection = require("./connection.js");


function promptUserPurchase() {
	inquirer.prompt([
		{
			type: 'input',
			name: 'item_id',
			message: 'Please enter the Item ID which you would like to purchase.',
		},
		{
			type: 'input',
			name: 'quantity',
			message: 'How many would you like?',
		}
	]).then(function(input) {

		var item = input.item_id;
		var quantity = input.quantity;

		var queryStr = 'SELECT * FROM products WHERE ?';

		connection.query(queryStr, {item_id: item}, function(err, data) {
			if (err) throw err;

			if (data.length === 0) {
				console.log('ERROR: Item does not exist. Please select another item instead.');

			displayInventory();	

			} else {
				var productData = data[0];

				if (quantity <= productData.stock_quantity) {
					console.log('Congratulations, placing order................................................');

					var updateQueryStr = 'UPDATE products SET stock_quantity = ' + (productData.stock_quantity - quantity) + ' WHERE item_id = ' + item;

					connection.query(updateQueryStr, function(err, data) {
						if (err) throw err;

						console.log('Your oder is now placed. Your total is $' + productData.price * quantity);
					

						connection.end();
					})
				} else {
					console.log('Sorry, there is not enough product in stock, your order can not be placed as is.');
					console.log('Please modify your order.');
					console.log("---------------------------------------------------------------------");

					displayInventory();
				}
			}
		})
	})
}

function displayInventory() {

	queryStr = 'SELECT * FROM products';

	connection.query(queryStr, function(err, data) {
		if (err) throw err;

		console.log('Existing Inventory: ');

		var tableString = '';
		for (var i = 0; i < data.length; i++) {
			tableString = '';
			tableString += 'Item ID: ' + data[i].item_id + '  ||  ';
			tableString += 'Product Name: ' + data[i].product_name + '  ||  ';
			tableString += 'Department: ' + data[i].department_name + '  ||  ';
			tableString += 'Price: $' + data[i].price + '||';

			console.log(tableString);
		}

	  	console.log("---------------------------------------------------------------------");

	  	promptUserPurchase();
	})
}


function runBamazon() {

	displayInventory();
}


runBamazon();
