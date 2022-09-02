$( document ).ready( function() {
	var jbOffset = $( '#header' ).offset();
	
	
	$( window ).scroll( function() {
	  if ( $( document ).scrollTop() > jbOffset.top ) {
		$( '#header' ).addClass( 'fixed' );
	  }
	  else {
		$( '#header' ).removeClass( 'fixed' );
	  }
	});
  } );