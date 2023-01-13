$(document).ready(function() {
    $('h2').each(function(index) {
      $(this).attr('id', 'section' + index);
      $(this).prepend('<a href="#section' + index + '">#</a> ');
    });
  });