/**
 * Custom JS - Custom js for APEZ template
 * @version v1.6.0
 * @copyright 2018 Pepdev.
 */

/**
* OnDOMLoad
* ThemeSlider
* ResponsiveMenu
* ThemeAccordion
* FormAjaxsubmit
* Contact Submit Form
* Slider
* CountDown
* Modal
* Gallery
*/

(function ($) {
    "use strict";

    //*************************************************
    //ThemeAccordion **********************************
    //*************************************************
    // $('.theme-accordion:nth-child(1) .theme-accordion-bdy').slideDown();
    $('.theme-accordion:nth-child(1) .theme-accordion-control .fa').addClass('fa-minus');
    $('body').on('click', '.theme-accordion-hdr', function () {
        var ele = $(this);
        $('.theme-accordion-bdy').slideUp();
        $('.theme-accordion-control .fa').removeClass('fa-minus');
        if (ele.parents('.theme-accordion').find('.theme-accordion-bdy').css('display') === "none") {
            ele.find('.theme-accordion-control .fa').addClass('fa-minus');
            ele.parents('.theme-accordion').find('.theme-accordion-bdy').slideDown();
        } else {
            ele.find('.theme-accordion-control .fa').removeClass('fa-minus');
            ele.parents('.theme-accordion').find('.theme-accordion-bdy').slideUp();
        }
    });

}(jQuery));
