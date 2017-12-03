var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')

router.get('/', (request, result) => {
	burger.all((data) => {
		var burgerObj = {
			burgers: data
		}
		console.log('burgerObj', burgerObj)
		result.render('index', burgerObj)
	})
})

router.post('/api/burgers', (request, result) => {
	burger.create(request.body.burgerName, (result) => {
		console.log('the callback result', result)
		result.json({ id: result.insertId })
	})
})

router.put('/api/burgers', (request, res) => {
	burger.update(request.body.burgerId, request.body.devoured, (result) => {
		console.log('the callback result', result) 
		res.send({
			redirectTo: '/'
		})
	})
})

module.exports = router 