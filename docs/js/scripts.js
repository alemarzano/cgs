jQuery(function ($) {

    'use strict';
    //-------------------------------------------------------
    // navbar
    //-------------------------------------------------------

    $('.navTrigger').click(function () {
        $(this).toggleClass('active');
        // $("#mainListDiv").toggleClass("show_list");
        // $("#mainListDiv").fadeIn();

    });




    //-------------------------------------------------------
    // counter
    //-------------------------------------------------------
    $('.counter-section').bind('inview', function (event, visible, visiblePartX, visiblePartY) {
        if (visible) {
            $(this).find('.timer').each(function () {
                var $this = $(this);
                $({
                    Counter: 0
                }).animate({
                    Counter: $this.text()
                }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.Counter));
                    }
                });
            });
            $(this).unbind('inview');
        }
    });


    $(this).unbind('inview');

    // ----------------------------------------------------------------
    //  Customs extras
    // ----------------------------------------------------------------

    $('#my-slider').sliderPro({

        width: "100vw",
        height: "90vh",
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 160,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        forceSize: 'fullWindow',
        breakpoints: {
            1366: {
                height: "95vh",
                forceSize: 'none',
            },
            1280: {
                height: "95vh",
                forceSize: 'none',
                thumbnailWidth: 160,
                thumbnailHeight: 100,
            },
            1024: {
                height: 720,
                thumbnailWidth: 144,
                thumbnailHeight: 96,
                forceSize: 'none',
            },
            768: {
                waitForLayers: true,
                thumbnailPointer: true,
                height: 720,
                thumbnailWidth: 130,
                thumbnailHeight: 96,
                forceSize: 'none',
            },
            500: {
                width: "100vw",
                height: 480,
                forceSize: 'none',
                thumbnailWidth: 65,
                thumbnailHeight: 65,
                // aspectRatio: 0.7
            }
        }
    });

    /* slice p slider */
    var jmediaquery = window.matchMedia("(max-width: 768px)")
    if (jmediaquery.matches) {
        var p = $('#my-slider .sp-layer p');

        p.each(function () {
            var text = $(this).html();
            var cut = text.slice(0, 210) + " ...";
            if (text.length >= 211) {
                $(this).html(cut);
            }
        });
    }

    $();
    var header = $(".topnavbar");
    var viewport = $(window).width();
    var pic = header.find('img');

    function scrolled() {
        $(window).scroll(function () {
            var scroll = $(window).scrollTop();

            if (scroll >= 100) {
                header.addClass('scrolled');
                // header.removeClass('transparent');
                // pic.attr('src', 'img/logo.png');

            } else {
                header.removeClass("scrolled");
                // header.addClass('transparent');
                // pic.attr('src', 'img/logo-w.png');
            }
        });

    }

    if (viewport > 1200) {
        // pic.attr('src', 'img/logo-w.png')
        scrolled();
        var thumbs = $('.sp-thumbnails').width().toString();
        var slide = $('.sp-slide').find('.container');
        slide.css('width', thumbs + 'px');
        slide.css('maxWidth', thumbs + 'px');
    }


})
var icon = $('.navTrigger');
// var overlay = $("#overlay");
var h = $('nav').height().toString();

function openNav() {
    $(".navlinks").css('width', '100vw');
    $(".navlinks").css({
        height: `calc(100% - ${h}px)`,
        // top: `${h}px`,
    });
    $('body').css('overflow', "hidden");
    icon.attr('onclick', 'closeNav()');
    // overlay.style.opacity = '.7'
    // overlay.style.width0vh'100vw    icon.attr('onclick', 'closeNav()');

}

function closeNav() {
    $(".navlinks").css('width', '0');
    $('body').css('overflow', "inherit");
    // overlay.style.opacity = '0';
    // overlay.style.height = '0'
    icon.attr('onclick', 'openNav()');
}

// Link tabs //
var hash = window.location.hash;
// if a hash is present (when you come to this page)
if (hash != '') {
    // show the tab
    $('.nav-tabs a[href="' + hash + '"]').tab('show');
    window.scrollTo(0,0);
}

<<<<<<< HEAD
// Change hash for page-reload
$('.nav-pills a').on('shown.bs.tab', function (e) {
    window.location.hash = e.target.hash;
})

// SMOOTH SCROLL //

$('a.anchor[href*="#"]')
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
          scrollTop: target.offset().top - 90
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
=======
// SMOOTH SCROLL //

$('a.anchor[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function (event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                    scrollTop: target.offset().top - 90
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });
>>>>>>> ed9deaf8924f22d6f18fa1b2e5e72093b8cb48a3
