$('html, body').localScroll({duration:800});

new WOW().init();

// $( window ).scroll(function() {
//   $('.nav').addClass('navScroll');
// });

$('#blog-trig').click(function() {
  $('.blog').addClass('blog-active');
  $('.overlay').fadeIn();
  $('body').addClass('lock');
});

$('.overlay').click(function() {
  $('.blog').removeClass('blog-active');
  $('.overlay').fadeOut();
  $('body').removeClass('lock');
});