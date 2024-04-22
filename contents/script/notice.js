//notice.js;

//alert('뉴스~');

$(function () {

    $('.content').slice(0, 2).show(); // 초기갯수-2개씩!

    $('.more').click(function (e) {
        e.preventDefault();
        $('.content:hidden').slice(0, 2).show();

        var hCon = $('.content:hidden').length;
        console.log('숨겨진 뉴스 갯수: ' + hCon);


        if(hCon === 0){
            $(this).fadeOut();
            /* alert('마지막 게시물입니다.'); */
           } 


           var offTop = $('.more').offset().top;

           $('html, body').animate({
            scrollTop: offTop / 2
           }, 1000);


    });

});






/* 탑버튼 만들기 */
$(function () {
    $(window).scroll(function () {

        var scTop = $(this).scrollTop();

        if (scTop > 200) {
            $('.top').fadeIn();
        } else {
            $('.top').fadeOut();
        }
    });
});




