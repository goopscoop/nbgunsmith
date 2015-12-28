console.log('hi');



$().ready( function(){
  $('#submit-form').submit(function( event ) {
    alert( "Handler for .submit() called." );
    event.preventDefault();
  });
} )