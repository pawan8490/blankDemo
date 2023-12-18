$(document).ready(function () {
    var HeadH = $('#header').outerHeight();

    let prevScrollPos = window.pageYOffset;

    function handleScroll() {
        const currentScrollPos = window.pageYOffset;
        const header = document.getElementById("header");
      
        if (currentScrollPos > prevScrollPos) {
          // Scrolling down, remove the class from the header if it exists
          header.classList.remove("scroll-up");
        } else {
          // Scrolling up, add the class to the header if it doesn't already have it
          header.classList.add("scroll-up");
        }

        if (currentScrollPos < HeadH*1.5) {
            // Scrolling down, remove the class from the header if it exists
            header.classList.remove("is-sticky");
          } else {
            // Scrolling up, add the class to the header if it doesn't already have it
            header.classList.add("is-sticky");
        }
        prevScrollPos = currentScrollPos;
    }

      window.addEventListener("scroll", handleScroll);


    $('.back_top').click(function(){
        $('html, body').animate({scrollTop:0}, 400);
    });

    $('.back_top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 400);
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