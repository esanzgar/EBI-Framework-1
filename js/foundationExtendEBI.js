/* Copyright (c) EMBL-EBI 2016
   Authors: 
   Ken Hawkins (khawkins@ebi.ac.uk)
*/

// Foundation specific extensions of functionality
(function($) {

  $.fn.foundationExtendEBI = function() {
    // Link overlay images
    $(function() {
      $('.with-overlay').click(function(e) {
        var href = $(this).find('a:first').attr('href') || '';
        if (href.length > 0) {
          window.location.href = href;
        }
      })
    });

    // Responsive support for tables
    // Clone the class from a parent TH to any child TD
    jQuery('table.responsive-table').each( function() {
      var columnsToAppend = jQuery(this).find('th');
      console.log(columnsToAppend.length);
      for (var i = 0; i < columnsToAppend.length; i++) {
        if (jQuery(columnsToAppend[i]).attr('class')) {
          var position = i + 1;
          jQuery(this).find('td:nth-child('+position+')').addClass(jQuery(columnsToAppend[i]).attr('class'));
        }
      };
    });

    // Smooth scroll anchor links for jQuery users
    $(function() {
      $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
          if (target.length) {
            $('html,body').animate({
              scrollTop: target.offset().top - 40
            }, 1000);
            return false;
          }
        }
      });
    });
  }

}(jQuery));