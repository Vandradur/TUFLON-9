// Select all links with hashes
$('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });




$('.burger, .overlay').click(function(){
    $('.burger').toggleClass('clicked');
    $('.overlay').toggleClass('show');
    $('nav').toggleClass('show');
    $('body').toggleClass('overflow');
  });









// TweenMax.from(".leftEyeLid", 0.1, { y:10, repeat:-1, repeatDelay:3, ease:Power4.easeIn });

// TweenMax.from(".leftEyeLid", 0.1, { y:10, repeat:-1, repeatDelay:3, ease:Power4.easeIn });
//Animation Landingpage LOGO and map

TweenMax.from("#redCircleCut-1", 2, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#blueCut-5", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#cc", 1, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#co", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#cn", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#s", 2, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#ct", 1, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#r", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#cu", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#c", 2, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#t", 1, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#i", 3, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#coo", 4, { opacity:0, ease:Power4.easeIn  });
TweenMax.from("#cnn", 3, { opacity:0, ease:Power4.easeIn  });


//Animation to contact scroll


