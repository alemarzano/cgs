
$(document).ready(function () {
   $('#incoterms').progress_fnc();
   $('.progressStart').on('click', function () {
      var perent = $(this).closest("div").attr("id");
      $('#' + perent).progress_fnc({
         type: 'start'
      });
   });
   $('.progressReset').on('click', function () {
      var perent = $(this).closest("div").attr("id");
      $('#' + perent).progress_fnc({
         type: 'reset'
      });
   });
   $('.incoterm-expand').on('click', function () {
      $(this).closest('.incoterm-block').children('.incoterm-bars').children('.incoterm-text').slideToggle();
      $(this).toggleClass('expanded');
   });
});
(function ($) {
   $.fn.progress_fnc = function (options) {
      var settings = $.extend({
         type: 'start'
      }, options);
      var div = $(this);
      var progress = div.find('.cssProgress');
      progress.each(function () {
         var self = $(this);
         var progress_bar = self.find('.cssProgress-bar.bar1');
         var progress_bar_2 = self.find('.cssProgress-bar.bar2');
         var progress_bar_3 = self.find('.cssProgress-bar.bar3');
         var progress_label = self.find('.cssProgress-label, .cssProgress-label2, .cssProgress-label3');
         var progress_value = progress_bar.data('percent');
         var progress_value_2 = progress_bar_2.data('percent');
         var progress_value_3 = progress_bar_3.data('percent');
         var percentage = parseInt(progress_value, 10) + '%';
         var percentage_2 = parseInt(progress_value_2, 10) + '%';
         var percentage_3 = parseInt(progress_value_3, 10) + '%';
         progress_bar.css({
            'width': '0%',
            'transition': 'none',
            '-webkit-transition': 'none',
            '-moz-transition': 'none'
         });
         progress_bar_2.css({
            'width': '0%',
            'transition': 'none',
            '-webkit-transition': 'none',
            '-moz-transition': 'none'
         });
         progress_bar_3.css({
            'width': '0%',
            'transition': 'none',
            '-webkit-transition': 'none',
            '-moz-transition': 'none'
         });
         if (settings.type == 'start') {
            progress_bar.animate({
               width: percentage
            }, {
               duration: 1000,
               step: function (x) {}
            });
            progress_bar_2.animate({
               width: percentage_2
            }, {
               duration: 1000,
               step: function (x) {}
            });
            progress_bar_3.animate({
               width: percentage_3
            }, {
               duration: 1000,
               step: function (x) {}
            });
            setTimeout(function () {
               progress_label.show();
            }, 1000);
         }
      });
   };
}(jQuery));
