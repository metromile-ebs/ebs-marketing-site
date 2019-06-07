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

// Optimized scroll listener
( function() {
  var latestKnownScrollY = 0;
  var triggerEl = document.getElementById("graph__scroll-trigger");
  var viewportOffset = triggerEl.getBoundingClientRect();
  var triggerY = viewportOffset.top + window.innerHeight;
  var ticking = false;

  function onScroll() {
    latestKnownScrollY = window.scrollY;
    requestTick();
  }

  function requestTick() {
    if( !ticking ) {
      requestAnimationFrame(update);
    }
    ticking = true;
  }

  function update() {
    console.log(triggerY);
    ticking = false;
    var currentScrollY = latestKnownScrollY;
    var screenBottom = currentScrollY + window.innerHeight;

    if(screenBottom >= triggerY) {
      // console.log('waaaaaaaa');
    }

  }

  document.addEventListener('scroll', onScroll, false);

} )();