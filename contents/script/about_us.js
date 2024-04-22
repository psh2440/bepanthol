//about_us.js;

var pno = 0;
const totcnt = 7;
var prot = 0;



function chgBnav() {
    $('.bnav li').eq(pno).addClass('selB').siblings().removeClass('selB');
}


function initSet() {
    $('main .main-title, .intro .intro-title').css({
        top: '90%',
        opacity: 0
    });


    $('#page3 .txt-wrap, #page5 .txt-wrap').css({
        left: '20%',
        opacity: 0
    });

    $('#page4 .txt-wrap').css({
        left: '20%',
        opacity: 0
    });

    $('.outro-title').css({
        top: '110%',
        opacity: 0
    });

}


function pageAction() {
    if (pno === 0) {
        $('main .main-title').stop().animate({
            top: '44%',
            opacity: 1
        }, 800);
    } else if (pno === 1) {
        $('.intro .intro-title').stop().animate({
            top: '50%',
            opacity: 1
        }, 800);
    } else if (pno === 2) {
        $('#page3 .txt-wrap').stop().animate({
            left: 0,
            opacity: 1
        });
    } else if (pno === 3) {
        $('#page4 .txt-wrap').stop().animate({
            left: 0,
            opacity: 1
        });
    } else if (pno === 4) {
        $('#page5 .txt-wrap').stop().animate({
            left: 0,
            opacity: 1
        });
    } else if (pno === 5) {
        $('.outro-title').stop().animate({
            top: '80%',
            opacity: 1
        });
    }

}









$(document).ready(function () {
    initSet();
    pageAction();

    $(document).on('mousewheel DOMMouseScroll', function (e) {
        //console.log('휠 되낭');

        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;


        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        //console.log('휠 델타값: ' + delta);

        ////////////////////////////////////여까진 됐당!!!-파폭조절해줄차례///////////////////



        if (/Firefox/i.test(navigator.userAgent)) {

            delta = -evt.detail;
            console.log('파이어폭스 detail:' + delta);
        }


        ////////////////파폭도 나오고있음!! 델타값까지!////////

        if (delta > 0) {
            pno--;
            if (pno === -1) pno = 0;

        } else {
            pno++;
            if (pno === totcnt) pno = totcnt - 1;
        }

        console.log('현재 페이지 번호: ' + pno);
        //////////////////////////////////////////////////////////

        var pagepos = $('.page').eq(pno).offset().top;
        //console.log('페이지 이동거리: ' + pagepos)


        $('html,body').animate({
            scrollTop: pagepos
        }, 800, function () {
            initSet();
            pageAction();
            prot = 0;
        });



        //선생님이 처음 해주신 방법1
        /* if(pno === 1) {
            $('.intro-title').delay(800).animate({
                top: '50%'
            }, 800);
        } */

        /* 초기설정을 담은 함수랑 액션실행함수 필요함 */


        chgBnav();


        /* $('.bnav li a').click(function () {
            $(this).parent().addClass('selB').siblings().removeClass('selB');
        }); */





    });


    //블릿나비!!!
    $('.bnav li a').click(function (e) {

        //console.log('a클릭');

        e.preventDefault();

        var idx = $(this).parent().index();
        //console.log(idx);

        pno = idx;
        //console.log('변경된 pno번호: '+pno);

        var pid = $(this).attr('href');
        //console.log('클릭된 a의 href값: '+pid);

        var pagepos = $(pid).offset().top;


        $('html, body').animate({
            scrollTop: pagepos
        }, 800, function(){
            initSet();
            pageAction();
        });

        chgBnav();

    });


});




$(document).ready(function () {

});

