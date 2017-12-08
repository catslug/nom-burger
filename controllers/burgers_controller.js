var express = require('express')
var router = express.Router()
var burger = require('../models/burger.js')

router.get('/', (request, result) => {
	burger.all((data) => {
		var burgerObj = {
			burgers: data
		}
		result.render('index', burgerObj)
	})
})

router.post('/api/burgers', (request, result) => {
	burger.create(request.body.burgerName, (res) => {
		console.log('the callback result', res)
		result.send({ 
			redirectTo: '/' 
		})
	})
})

router.put('/api/burgers', (request, result) => {
	burger.update(request.body.burgerId, request.body.devoured, (res) => {
		result.send({
			redirectTo: '/'
		})
	})
})

module.exports = router 