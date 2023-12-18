$(document).ready(function () {
   
    var HeadH = $('#header').outerHeight();

    let prevScrollPos = window.pageYOffset;
    // console.log("prevScroll post" , prevScrollPos)
    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const header = document.getElementById("header");
        if (currentScrollPos > prevScrollPos) {
          header.classList.remove("scroll-up");
        } else {
          header.classList.add("scroll-up");
        }

        if (currentScrollPos < HeadH*1.5) {
            header.classList.remove("is-sticky");
          } else {
            header.classList.add("is-sticky");
        }
        prevScrollPos = currentScrollPos;
    }

    window.addEventListener("scroll", handleScroll);

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