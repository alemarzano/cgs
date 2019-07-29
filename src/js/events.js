'use strict'

jQuery(document).ready(function ($) {
    $('#my-slider').sliderPro({

        width: "100vw",
        height: "80vh",
        arrows: true,
        buttons: false,
        waitForLayers: true,
        thumbnailWidth: 200,
        thumbnailHeight: 100,
        thumbnailPointer: true,
        autoplay: false,
        autoScaleLayers: false,
        forceSize: 'fullWindow',
        breakpoints: {
            500: {
                width:360,
                thumbnailWidth: 120,
                thumbnailHeight: 120,
                aspectRatio: 0.7
            }
        }
    });
});