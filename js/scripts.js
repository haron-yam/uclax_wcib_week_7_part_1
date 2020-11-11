jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

			$(this).html('Click for Mom').removeClass('btn-primary').addClass('btn-success');

			$('#my_image').attr('src', 'images/dad.jpg');

		} else {
			my_switch = false;

			$(this).html('Click for Dad').removeClass('btn-success').addClass('btn-primary');;

			$('#my_image').attr('src', 'images/mom.jpg');
		}

		// if ( $('.square.alt').hasClass('red') ) {
		// 	$('.square.alt').removeClass('red');
		// } else {
		// 	$('.square.alt').addClass('red');
		// }



	});

});
