$(document).ready(function(){
	
	// Listen to the form
	$('#note-form').submit(function( e ){

		// Prevent form from submitting
		e.preventDefault();

		// Grab the note
		if( $.trim( $('#note').val() ) == '' ){
			return;
		}

		// Prepre AJAX
		$.ajax({
			url: 'http://jasana.mael.yoobee.net.nz/ajax-yoobee/ajax-yoobee.php',
			data: { note: $('#note').val() },
			success: function( dataFromServer ) {

			},
			error: function() {
				alert("Cannot connect");
			}
		});


	});

});
