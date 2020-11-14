jQuery(function() {

	let my_switch = false;

	$('#my_button').click(function () {

		if ( my_switch == false ) {
			my_switch = true;

			$(this).html('Click for Mom').removeClass('btn-info').addClass('btn-warning');

			$('#my_image').attr('src', '../images/dad.gif');

		} else {
			my_switch = false;

			$(this).html('Click for Dad').removeClass('btn-warning').addClass('btn-info');;

			$('#my_image').attr('src', '../images/mom.gif');
		}

		// if ( $('.square.alt').hasClass('red') ) {
		// 	$('.square.alt').removeClass('red');
		// } else {
		// 	$('.square.alt').addClass('red');
		// }



	});

});
