$(document).ready(function() {
  addActiveClass();
});


function addActiveClass() {
  $( "input" ).focus(function() {
    $('.input-wrapper').removeClass('active');
    var parent = $(this).parent();
    var sibling = parent.siblings;
    parent.addClass('active');
  });
  $( "input" ).focusout(function() {
    $('.input-wrapper').removeClass('active');
  });
}