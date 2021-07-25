$(document).ready(function () {


                    AOS.init({
                        duration: 1400
                    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 140) {
            $('nav').css
                (
                    {
                        'paddingTop': '10px',
                        'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'
                    }
                );
        }
        else {
            $('nav').css
                (
                    {
                        "background": '#fff',
                        'paddingTop': '15px',
                        'box-shadow': 'none'
                    }
                );
        }
    });
    if ($(window).scrollTop() >= 140) {
        $('nav').css
            (
                {
                    'paddingTop': '10px',
                    'box-shadow': '-4px 10px 14px -12px rgba(0,0,0,0.75)'

                }
            );
    }
    else {
        $("nav").css
            (
                {
                    "background": '#fff',
                    'paddingTop': '15px',
                    'box-shadow': 'none'
                }
            );
    }

    $('ul.nav-links li a').on('click', function () {
        $('html , boby').animate({

            scrollTop: $("#" + $(this).data('scroll')).offset().top
        }, 1500)
    });

    $('ul.nav-links li a').on('click', function () {

        $(this).addClass('active').parent().siblings().find('a').removeClass('active');
    });


    $(window).scroll(function () {

        $('section , header').each(function () {
            if ($(window).scrollTop() + 100 >= $(this).offset().top) {
                var secID = $(this).attr('id');
                $('ul.nav-links li a').removeClass('active');
                $('ul.nav-links li a[data-scroll="' + secID + '"]').addClass('active')
            }
        });
    });

    $('section , header').each(function () {
        if ($(window).scrollTop() + 100 >= $(this).offset().top) {
            var secID = $(this).attr('id');
            $('ul.nav-links li a').removeClass('active');
            $('ul.nav-links li a[data-scroll="' + secID + '"]').addClass('active')
        }
    });


    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });

    $("body").niceScroll({
        cursorcolor: "#51eaea",
        cursorwidth: "8px"
    });




});