// header.js

$(document).ready(function(){
    $('.gnb>li').mouseenter(function(){
        //$(this).find('.smenu>li').slideDown().css('background-color','rgb(255 248 203)');
        $(this).find('.smenu').slideDown().css('background-color','rgba(251, 255, 255,0.9)');
    });

    $('.gnb>li').mouseleave(function(){
        $('.smenu').stop().slideUp();
    });

});

/* 255,255,255,0.8 */