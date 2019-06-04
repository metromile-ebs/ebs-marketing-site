import './modules'

// 

$('.bg-option-1, .ol-option-1').show();

$('.bg-switcher').click(function() {
  const classToShow = $(this).data('switcher');
  const toShow = $( '.'+classToShow );

  $('.bg-switcher').removeClass('active');
  $(this).addClass('active');
  
  $('.hero__bg-option').hide();
  toShow.show();
});

$('.ol-switcher').click(function() {
  const classToShow = $(this).data('switcher');
  const toShow = $( '.'+classToShow );

  $('.ol-switcher').removeClass('active');
  $(this).addClass('active');
  
  $('.hero__ol-option').hide();
  toShow.show();
});
