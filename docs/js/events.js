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
    } 

    var accordion = (function(){
  
        var $accordion = $('.js-accordion');
        var $accordion_header = $accordion.find('.js-accordion-header');
        var $accordion_item = $('.js-accordion-item');
       
        // default settings 
        var settings = {
          // animation speed
          speed: 600,
          
          // close all other accordion items if true
          oneOpen: false
        };
          
        return {
          // pass configurable object literal
          init: function($settings) {
            $accordion_header.on('click', function() {
              accordion.toggle($(this));
            });
            
            $.extend(settings, $settings); 
            
            // ensure only one accordion is active if oneOpen is true
            if(settings.oneOpen && $('.js-accordion-item.active').length > 1) {
              $('.js-accordion-item.active:not(:first)').removeClass('active');
            }
            
            // reveal the active accordion bodies
            $('.js-accordion-item.active').find('> .js-accordion-body').show();
          },
          toggle: function($this) {
                  
            if(settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
              $this.closest('.js-accordion')
                     .find('> .js-accordion-item') 
                     .removeClass('active')
                     .find('.js-accordion-body')
                     .slideUp()
            }
            
            // show/hide the clicked accordion item
            $this.closest('.js-accordion-item').toggleClass('active');
            $this.next().stop().slideToggle(settings.speed);
          }
        }
      })();
      
      $(document).ready(function(){
        accordion.init({ speed: 150, oneOpen: true });
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
