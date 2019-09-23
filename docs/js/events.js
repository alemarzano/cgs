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
        thumbnailWidth: 160
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

  var accordion = (function () {

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
      init: function ($settings) {
        $accordion_header.on('click', function () {
          accordion.toggle($(this));
        });

        $.extend(settings, $settings);

        // ensure only one accordion is active if oneOpen is true
        if (settings.oneOpen && $('.js-accordion-item.active').length > 1) {
          $('.js-accordion-item.active:not(:first)').removeClass('active');
        }

        // reveal the active accordion bodies
        $('.js-accordion-item.active').find('> .js-accordion-body').show();
      },
      toggle: function ($this) {

        if (settings.oneOpen && $this[0] != $this.closest('.js-accordion').find('> .js-accordion-item.active > .js-accordion-header')[0]) {
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

  accordion.init({
    speed: 250,
    oneOpen: true
  });



  function activarTablas() {
    var tabs = $('.tab-pane .table-father')
    tabs.each(function () {
      $(this).addClass('active');
      var body = $(this).children('.accordion-body');
      // $(body).addClass('active');
      $(body).css('display', 'block')
    });
  }

  activarTablas();
  var menu = $('.service-list li')

  var menu_a = menu.children('a');
  menu_a.click(function () {
    activarTablas();
  });

  var info_direct = $('.direct');

  info_direct.click(function(){ 
      var containers = $('.service-list li');
      $(info_direct).removeClass('active');
      $(containers).each(function(){
        if ($(this).hasClass('active')){
          $(this).removeClass('active');
        }
      })
      if(($(this).hasClass('accordion__item'))!=true){
        $(info_direct).each(function(){
          if($(this).hasClass('accordion__item')){
            $(this).find('> .js-accordion-body').slideUp()
          }
        })
      }
      $(this).addClass('active');
       
  })


  var status = $('ol.breadcrumb > li');
  var menu_activo = $('header ul.nav > li');

  if (status == 'undefined' || !status.length) {
    $(menu_activo[0]).addClass('active');
  } else {
    var status = status.last();
    var status = status[0].innerText;
    for (var i = 0; i <= menu_activo.length; i++) {
      var active = menu_activo[i];
      $(active).removeClass('active');
      if (typeof active !== 'undefined') {
        var text = active.innerText;
        if (text == status) {
          $(active).addClass('active');
        }
      }
    }
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
var tables = $('.slider-tables');

tables.each(function (index, value) {
  var slider = tns({
    container: value,
    items: 1,
    center: false,
    nav: false,
    edgePadding: 0,
    controls: false,
    gutter: 20,
    fixedWidth: 300,
    loop: false,
    responsive: {
      640: {
        items: 3,
        fixedWidth: 280,
        controls: true,
        controlsText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
        center: false,
        mouseDrag: true,
        edgePadding: 0
      }

    }
  })
})