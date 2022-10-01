// jquery link
$(document).ready(function () {

    // navbar js 
    $('.handbar .show').on('click',function(){
        $('.menu_bar_show').animate({right:'0px'})
        $('.hide_everything').animate({width:'100%'})
    })
    $('.handbar .hide').on('click',function(){
        $('.hide_everything').animate({width:'0%'})
        $('.menu_bar_show').animate({right:'-250px'})
    })

    // --> for banner slider
    $('.slider').slick({
        prevArrow: '<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        autoplay: true,
    })

    // --> about path slider
    $('#company').on('click', function () {
        $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 0px' })
    })
    $('#history').on('click', function () {
        $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 30%' })
    })
    $('#mission').on('click', function () {
        $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 59%' })
    })
    $('#awards').on('click', function () {
        $('#about .about_content .content_path_menu .content_path_slider').animate({ margin: '0px 0px 0px 80%' })
    })

    // --> achievements counterUP
    $('.counter').counterUp({
        delay: 10,
        time: 2000
    });

    // --> blog slider
    $('.blog_item_slider').slick({
        prevArrow: '<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        slidesToShow: 3,
        slidesToScroll: 1,
    })

    // --> testimonial slider
    $('.testimonial_item_slider').slick({
        prevArrow: '<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        initialSlide: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });
    $('.employee_for_slide').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1990,
        initialSlide: 0,
        arrows: false,
    });


    //  --> brand slider
    $('.brand_slider').slick({
        prevArrow: '<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow: '<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        slidesToShow: 5,
        slidesToScroll: 2,
        autoplay: true,
    })
})
// --> about section js
function show(v1, v2, v3, v4) {
    $(v1).removeClass('display-none')
    $(v2).addClass('display-none')
    $(v3).addClass('display-none')
    $(v4).addClass('display-none')
}


