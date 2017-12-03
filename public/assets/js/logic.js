$(document).ready(function() {

	$('.devour').on('click', function() {
		event.preventDefault()
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
})