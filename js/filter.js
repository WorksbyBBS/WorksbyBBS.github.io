$(document).ready(function () {
    $('.portfolio-item').not('.featured').slideUp(800);
    $('.featured').addClass('active');

    $(".filter-menu li a").click(function () {

        $(".filter-menu li").removeClass('active');

        var selectedFilter = $(this).data('option');
        console.log(selectedFilter);

        $('.portfolio-item').not(selectedFilter).slideUp(800);
        $(selectedFilter).slideDown(800);
        $(selectedFilter).addClass("active");

    });
});