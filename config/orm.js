var connection = require('./connection.js')

var orm = {
	selectAll: (callback) => {
		let queryString = `SELECT * FROM burgers`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			callback(result)
			})
	},
	insertOne: (burgerName, callback) => {
		let queryString = `INSERT INTO burgers (burger_name, devoured) VALUES ('${burgerName}', 0);`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			callback(result)
		})
	},
	updateOne: (burgerId, devoured, callback) => {
		let queryString = `UPDATE burgers SET devoured = ${devoured} WHERE id = ${burgerId}`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			callback(result)
		})
	} 
}

module.exports = orm