import './modules';

// Smooth scroll
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});


// Stop video after a few loops for performance reasons
$(document).ready(function() {
  var videoLength = 12;
  var loopsBeforePausing = 5;
  var vid = document.getElementById("hero__video");

  vid.addEventListener("timeupdate", function(){
    if(this.currentTime >= (videoLength * loopsBeforePausing)) {
      vid.pause();
    }
  });
});

// Optimized scroll listener
( function() {
  var latestKnownScrollY = 0;
  var triggerEl = document.getElementById("graph__scroll-trigger");
  var distanceFromBottom = 10;
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
    var viewportOffset = triggerEl.getBoundingClientRect();
    var triggerY = Math.floor(viewportOffset.top - window.innerHeight + distanceFromBottom);
    ticking = false;
    var currentScrollY = latestKnownScrollY;
    var screenBottom = currentScrollY + window.innerHeight;

    if( triggerY < 0 ) {
      triggerEl.classList.add('animate');
      document.removeEventListener('scroll', onScroll);
    }
  }

  document.addEventListener('scroll', onScroll, false);

} )();