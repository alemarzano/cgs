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
                width:360,
                height:480,
                forceSize:'none',
                thumbnailWidth: 100,
                thumbnailHeight: 100,
                // aspectRatio: 0.7
            }
        }
    });
});