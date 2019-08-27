'use strict'

jQuery(document).ready(function ($) {
   
    $('#my-slider').sliderPro({

        width: "100vw",
        height: "80vh",
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
                height: 800,
                thumbnailWidth:160
            },
            768: {
                waitForLayers: true,
                thumbnailWidth: 170,
                thumbnailHeight: 170,
                thumbnailPointer: true
            },
            500: {
                width: "100vw",
                height: 480,
                forceSize: 'none',
                thumbnailWidth: 100,
                thumbnailHeight: 100,
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
    } else {
        
    }
    
   
});

function buscarLocations() {
    var locations = document.querySelectorAll('.list-inline');
    var menu = document.querySelector('#locations');
    var selected = menu.options[menu.selectedIndex].value;

    for (var i = 0; i <= locations.length; i++) {
        if (locations[i] != undefined) {
            var option = locations[i];
            option.classList.remove('visible');
            if (option.id == selected) {
                option.classList.add('visible');
            }
        }
    }
}
