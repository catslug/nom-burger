$(document).ready(function() {

	$('.devour').on('click', function() {
		let burgerObj = {
			burgerId: $(this).attr('data-id'),
			devoured: true
		}

		$.ajax({
			method: 'PUT',
			url: '/api/burgers',
			data: burgerObj
		}).done(function(response) {
			console.log('RESPONSE', response)
			window.location = response.redirectTo
		})	
	})

	$('#submit').on('click', function() {
		let burgerObj = {
			burgerName: $('#burgerName').val().trim()
		}

		$.ajax({
			method: 'POST',
			url: 'api/burgers',
			data: burgerObj
		}).done(function(response) {
			console.log('RESPONSE TO POST', response)
			window.location = response.redirectTo
		})
	})
})