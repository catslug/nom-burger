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

router.put('api/burgers', (request, result) => {
	burger.update(request.body.burgerName, request.body.devoured, (result) => {
		console.log('the callback result', result) 
		if (result.changedRows == 0) {
      		return result.status(404).end();
    	} else {
      		result.status(200).end();
   		}
	})
})

module.exports = router