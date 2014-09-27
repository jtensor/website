$( "#open" ).click(function() {
  $( ".list" ).animate({
    width: "100%",
    // borderWidth: "10px"
  }, 1500 );
});
 
$( "#close" ).click(function(){
  $( ".list" ).animate({
    width: "0%",
    // borderWidth: "10px"
  }, 1500 );
});