var connection = require('./connection.js')

var orm = {
	selectAll: (callback) => {
		let queryString = `SELECT * FROM burgers`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			console.log(result)
			callback(result)
			})
	},
	insertOne: (burgerName, callback) => {
		let queryString = `INSERT INTO burgers VALUES (burger_name, devoured) (${burgerName}, false)`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			console.log(result)
			callback(result)
		})
	},
	updateOne: (burgerName, devoured, callback) => {
		let queryString = `UPDATE burgers SET ${devoured} = true WHERE burger_name = ${burgerName}`
		connection.query(queryString, (err, result) => {
			if (err) throw err
			console.log(result)
			callback(result)
		})
	} 
}

module.exports = orm