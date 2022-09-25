// jquery link
$(document).ready(function(){

    // --> for banner slider
    $('.slider').slick({
        prevArrow:'<div class="slider-icon" id="left-icon"><i class="icon fas fa-chevron-left"></i></div>',
        nextArrow:'<div class="slider-icon" id="right-icon"><i class="icon fas fa-chevron-right"></i></div>',
        autoplay:true,
    })

    // --> about path slider
    $('#company').on('click',function(){
        $('#about .about_content .content_path_menu .content_path_slider').animate({margin:'0px 0px 0px 0px'})
    })
    $('#history').on('click',function(){
        $('#about .about_content .content_path_menu .content_path_slider').animate({margin:'0px 0px 0px 130px'})
    })
    $('#mission').on('click',function(){
        $('#about .about_content .content_path_menu .content_path_slider').animate({margin:'0px 0px 0px 260px'})
    })
    $('#awards').on('click',function(){
        $('#about .about_content .content_path_menu .content_path_slider').animate({margin:'0px 0px 0px 370px'})
    })
})
// --> about section js
function show(v1,v2,v3,v4){
    $(v1).removeClass('display-none')
    $(v2).addClass('display-none')
    $(v3).addClass('display-none')
    $(v4).addClass('display-none')
}


 