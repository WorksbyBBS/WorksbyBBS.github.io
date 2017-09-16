$(document).ready(function () {
    let $grid = $('.grid').imagesLoaded( function() {
        // init Isotope after all images have loaded
        $grid.isotope({
            // options
            itemSelector: '.grid-item',
            stagger: 30
        });
        $('.portfolio-item').not('.featured').hide();

        $(".filter-menu li a").click(function () {
            $(".filter-menu li").removeClass('active');
            let filterValue = $(this).attr('data-filter');
            $grid.isotope({ filter: filterValue });
            $(filterValue).addClass("active")
        });
    });

});