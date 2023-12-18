$(document).ready(function () {
   
    var HeadH = $('#header').outerHeight();

    var scrollWindow = function() {
        $(window).on('load scroll',function() {
            var navbar = $('#header');
            
            if ($(this).scrollTop() > HeadH) {
                if (!navbar.hasClass('is-sticky')) {
                    navbar.addClass('is-sticky');
                    $('body').css('padding-top', HeadH);
                }
            }
            if ($(this).scrollTop() < HeadH) {
                if (navbar.hasClass('is-sticky')) {
                    navbar.removeClass('is-sticky');
                    $('body').css('padding-top', 0);
                }
            }
            if ($(this).scrollTop() > HeadH*2) {
                if (!navbar.hasClass('awake')) {
                    navbar.addClass('awake');
                }
            }
            if ($(this).scrollTop() < HeadH*2) {
                if (navbar.hasClass('awake')) {
                    navbar.removeClass('awake');
                }
            }
            if ($(this).scrollTop() >= 400) { 
                $('.back_top').addClass('active');
            }
            else {
                $('.back_top').removeClass('active');
            }
        });
    };
    scrollWindow();

    $('.back_top').click(function(){
        $('html, body').animate({scrollTop:0}, 500);
    });

    $('.back_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(".navbar-toggler").click(function () {
        $(this).toggleClass("menu-opened");
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".overlay").fadeToggle();
    });

    $(".overlay").click(function () {
        $(this).fadeToggle();
        $("#header .collapse:not(.show)").toggleClass("menu-show");
        $("body").toggleClass("scroll-off");
        $(".navbar-toggler").toggleClass("menu-opened");
    });


});