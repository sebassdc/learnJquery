$(function(){

  // DOM TRAVERSAL
  //$('h2').parents('section').siblings('header').children().css('border', '4px solid red');

  //EVENT BINDING
  /*
  $('html').keypress(function(){
    $(this).toggleClass('blue');
  });
  */
  $('h2').click(function(e){
    e.preventDefault();
    $(this).hide('slow');
  });
});
