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
        height: "70vh",
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 234,
        thumbnailHeight: 130,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        forceSize: 'fullWindow',
        breakpoints: {
            1440: {
                height: 720,
                forceSize: 'none',
                thumbnailWidth: 160
            },
            1366: {
                height: 580,
                    forceSize: 'none',
            },
            768: {
                waitForLayers: true,
                thumbnailWidth: 144,
                thumbnailHeight: 120,
                thumbnailPointer:   true,
                height: 720,
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


})
var icon = $('.navTrigger');
// var overlay = $("#overlay");

function openNav() {
    $(".navlinks").css('height', '25em');
    $('body').css('overflow', "hidden");
    // overlay.style.opacity = '.7'
    // overlay.style.height = '100vh'
    icon.attr('onclick', 'closeNav()');

}

function closeNav() {
    $(".navlinks").css('height', '0');
    $('body').css('overflow', "inherit");
    // overlay.style.opacity = '0';
    // overlay.style.height = '0'
    icon.attr('onclick', 'openNav()');
}