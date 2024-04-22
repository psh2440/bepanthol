// /product_240304.js


/* function initSet (){
    $('.main-title, .list-wrap').css({
        opacity: 0
    });
}


function action(){
    if(scrollTop===0){
        $('.main-title, .list-wrap').animate({
            marginTop: '50%'
        }); 
    }
} */



$(document).ready(function () {

    //클릭된 메뉴의 페이지 url 읽어오기
    var page_url = window.location.href;
    console.log(page_url);

    var page_id = page_url.substring(page_url.lastIndexOf("#") + 1);
    console.log(page_id); //face, body, lip, multi

    //substring(a,b) : a인덱스부터 b인덱스 '이전' 구간의 문자를 반환
    //substring(a) : a부터 이후의 값을 반환

    //lastIndexOf() : 문자열 끝에서부터 왼쪽으로 제일 먼저 발견된 '#'의 인덱스값 반환 
    //그러나 아이디를 포함하지 않을 것이므로 인덱스 번호에 +1


    //페이지 이동~
    if (page_id == 'face') {
        $('html,body').animate({
            scrollTop: $('#' + page_id).offset().top
        }, 800);

    } else if (page_id == 'body') {
        $('html,body').animate({
            scrollTop: $('#' + page_id).offset().top
        }, 800);

    } else if (page_id == 'lip') {
        $('html,body').animate({
            scrollTop: $('#' + page_id).offset().top
        }, 800);

    } else if (page_id == 'multi') {
        $('html,body').animate({
            scrollTop: $('#' + page_id).offset().top
        }, 800);
    }


    //product.html 페이지에서 메뉴를 클릭했을 때
    $('.smenu > li > a, .list-wrap > li > a').click(function (e) {

        e.preventDefault();

        var idBox = $(this).attr('href');
        console.log(idBox);

        $('html, body').animate({
            scrollTop: $(idBox).offset().top
        }, 800);

    });




});




/**********/


$(document).ready(function () {
    $('li .modal').click(function (e) {
        e.preventDefault();

        $(this).next('.modal-bg').show();




    });

    $('.off').click(function (e) {
        e.preventDefault();

        $('.modal-bg').hide();

    });



});










// 탑버튼 만들기
$(function () {
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();

        if (scTop > 900) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
});

