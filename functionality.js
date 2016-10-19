$( ".available" ).hover(
  function() {
    $( this ).prepend( $( "<span> Hello</span>" ) );
  }, function() {
    $( this ).find( "span:last" ).remove();
  }
);
/*
$(".available").hover(function() {
	$("#login-form").slideToogle();
});
*/
