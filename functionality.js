<<<<<<< HEAD
$( ".available" ).hover(function( event ) {
  if ( $( "input:first" ).val() === "correct" ) {
    $( "span" ).text( "Validated..." ).show();
    return;
  }

  $( "span" ).text( "Not valid!" ).show().fadeOut( 1000 );
  event.preventDefault();
});
=======
$( ".available" ).click(
  function() {
    $(this).css("background-color", "pink" );
  }
);
/*
$(".available").hover(function() {
	$("#login-form").slideToogle();
});
*/
>>>>>>> 3ff7927803046f704035cc6a556b9883f4afd05a
