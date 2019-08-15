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
    //OnDOMLoad  **************************************
    //*************************************************

    $('[data-toggle="tooltip"]').tooltip();
    $(window).on('load', function () {
        $('.slider-wrapper').flexslider({
            animation: "fade",
            animationLoop: true,
            pauseOnHover: true,
            keyboard: true,
            controlNav: false
        });
        $('.slider-height').removeClass();
        $('.thumbnail-slider').flexslider({
            animation: "slide",
            controlNav: "thumbnails"
        });
    });

    //*************************************************
    //ThemeSlider  ************************************
    //*************************************************
    $('.theme-flexslider').flexslider({
        animation: "slide",
        animationLoop: true,
        pauseOnHover: true
    });

    $(".theme-owlslider").owlCarousel({
        items: 1,
        dots: true
    });

    //*************************************************
    //ResponsiveMenu  *********************************
    //*************************************************
    
    /*$('.header-light').scrollToFixed({
        preFixed: function () {
            $('.header-light').addClass('hdr-fixed-light');
        },
        postFixed: function () {
            $('.header-light').removeClass('hdr-fixed-light');
        }
    });

    $('.header-dark').scrollToFixed({
        preFixed: function () {
            $('.header-dark').addClass('hdr-fixed-dark');
        },
        postFixed: function () {
            $('.header-dark').removeClass('hdr-fixed-dark');
        }
    });

    $('.header-colored').scrollToFixed({
        preFixed: function () {
            $('.header-colored').addClass('hdr-fixed-colored');
        },
        postFixed: function () {
            $('.header-colored').removeClass('hdr-fixed-colored');
        }
    });

    $('.header-gradient').scrollToFixed({
        preFixed: function () {
            $('.header-gradient').addClass('hdr-fixed-gradient');
        },
        postFixed: function () {
            $('.header-gradient').removeClass('hdr-fixed-gradient');
        }
    });*/

    $('body').on('click', '#menu-bar', function () {
        var menu = $('.menu');
        $('body').css('overflow', 'hidden');
        menu.css('left', '0');
        menu.show();
    });

    $('body').on('click', '.mobile-menu-close', function () {
        var menu = $('.menu');
        $('body').css('overflow', 'visible');
        menu.css('left', '-130%');
        menu.hide();
    });

    $(window).on('resize', function () {
        var menu = $('.menu');
        if ($(window).width() > 992) {
            $('body').css('overflow', 'visible');
            menu.css('display', 'block');
            menu.css('left', 'inherit');
        } else {
            menu.css('display', 'none');
            menu.css('left', '-130%');
        }
    });

    $('.menu').on('click', '.hdr-search', function () {
        $('.search-bar').css('display', 'table');
        return false;
    });

    $('body').on('click', '.search-close', function () {
        var ele = $('.search-bar');
        ele.addClass('zoomOut');
        setTimeout(function(){ 
            ele.css('display', 'none');
            ele.removeClass('zoomOut');
        }, 400);
    });

    //*************************************************
    //Side Panel **************************************
    //*************************************************
    //Open Left Panel
    $('.open-left-panel').on('click', function () {
        $('.side-panel-left').addClass('active');
        $('.overlay').fadeIn();
    });
     //Open Right Panel
     $('.open-right-panel').on('click', function () {
        $('.side-panel-right').addClass('active');
        $('.overlay').fadeIn();
    });
    //CLose Panel
    $('.close-panel, .overlay').on('click', function () {
        $('.side-panel').removeClass('active');
        $('.overlay').fadeOut();
    });

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

    //Processing Button
    $('body').on('click', '.button-process', function () {
        var ele = $(this);
        ele.button('loading');
        setTimeout(function () { ele.button('reset'); }, 8000);
    });

    //*************************************************
    //Contact Submit Form *****************************
    //*************************************************

    $('body').on('click', '.contact-submit', function () {
        var ele = $(this), data = {};
        ele.button('loading');
        data.name = $('#name').val();
        data.email = $('#email').val();
        data.mobile = $('#phone').val();
        data.subject = $('#subject').val();
        data.message = $('#message').val();
        $.ajax({
            type: 'post',
            url: 'inc/contact-form.php',
            data: { name: data.name, email: data.email, mobile: data.mobile, subject: data.subject, message: data.message },
            error: function () {
                $('.contact-error .alert').remove();
                $('.contact-error').append('<div class="alert alert-danger" role="alert">Server Error Please try again after some time...</div>');
            },
            success: function (response) {
                var data = $.parseJSON(response);
                if (data.flag === "1") {
                    ele.button('reset');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-danger" role="alert">Please enter ' + data.error + ' ! ! !</div>');
                } else {
                    ele.button('reset');
                    $('.contact-error .alert').remove();
                    $('.contact-error').append('<div class="alert alert-success" role="alert">Request Created Successfully.</div>');
                }
            }
        });
    });

    //*************************************************
    //Slider ******************************************
    //*************************************************
    //Testimonial Slider
    $(".testimonial-container").owlCarousel({
        items: 1,
        dots: true
    });

    $('.multi-item-slider').owlCarousel({
        loop:true,
        margin:10,
        autoplay: true,
        responsiveClass:true,
        dots: true,
        responsive:{
            0:{
                items:1,
                nav:true
            },
            600:{
                items:3,
                nav:false
            },
            1000:{
                items:4,
                nav:false,
                loop:false
            }
        }
    })

    //*************************************************
    //CountDown ******************************************
    //*************************************************
    $('.counter').counterUp({
        delay: 10,
        time: 400
    });

    //*************************************************
    //Portfolio  ****************************************
    //*************************************************
    $('.gallery-block').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.portfolio-masonary').masonry({
        itemSelector: '.portfolio-img'
    });

    $('body').on('click', '.portfolio-filter' ,function(){
        var ele = $(this), value = ele.attr('data-filter');
        $('.portfolio-filter').removeClass('active');
        ele.addClass('active');
        if(value == "all") {
            $('.filter').show('1000');
        } else {
            $(".filter").not('.'+value).hide('2000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    $('.portfolio-gallery').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

    $('.gallery').magnificPopup({
        type:'image',
        gallery: {
            enabled: true
        }
    });

}(jQuery));