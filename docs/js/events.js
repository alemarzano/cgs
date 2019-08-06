'use strict'

jQuery(document).ready(function ($) {
    console.log('Esta es la altura de ventana: '+window.innerHeight);
    console.log('Esta es el ancho de ventana: '+window.innerWidth);
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
                height: 600,
                thumbnailWidth:200
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
