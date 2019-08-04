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
            500: {
                width: 360,
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
