$(function () {
    $(".middle-right-goods-slider").owlCarousel({
        responsiveClass: true,
        responsive: {
            0: {
                margin: 80,
                items: 1,
                autoWidth: true,
                loop: true,
                center: true,
            },
            450: {
                items: 2,
                autoWidth: true,
                loop: true
            },
            700: {
                items: 3,
                autoWidth: true,
                loop: true
            },
            900: {
                items: 4,
                autoWidth: true,
                loop: true
            },
            1197: {
                margin: 15,
                autoWidth: true,
                autoHeight: true,
                loop: true
            }
        },
        autoplay: false,
        autoplayTimeout: 3000,
        dots:false,
        // Navigation
        nav: true,
        navText: ["<img src=\"img/arrow_left.png\">", "<img src=\"img/arrow_right.png\">"]
    });
    $(".middle-right-slider").owlCarousel({
        items: 1,
        dots: true,
        loop: true,
        // Navigation
        nav: true,
        navText: ["<img src=\"img/arrow_left.png\">", "<img src=\"img/arrow_right.png\">"]
    });
});