$('html, body').localScroll({duration:800});

new WOW().init();

// $( window ).scroll(function() {
//   $('.nav').addClass('navScroll');
// });
$('.overlay').click(function() {
  $('.blog').removeClass('blog-active');
  $('.overlay').fadeOut();
  $('body').removeClass('lock');
});