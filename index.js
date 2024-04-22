//index.js

//alert('되나?!');

var pno = 0;
const totcnt = 7;
var prot = 0;


function chgBnav() {
    $('.bnav li').eq(pno).addClass('selB').siblings().removeClass('selB');
}



$(document).ready(function () {
    $(document).on('mousewheel DOMMouseScroll', function (e) {
        console.log('휠 되낭');

        e.preventDefault();

        if (prot === 1) return false;
        prot = 1;


        var evt = window.event || e;

        var delta = evt.detail ? evt.detail : evt.wheelDelta;
        console.log('휠 델타값: ' + delta);

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
        console.log('페이지 이동거리: ' + pagepos)


        $('html,body').animate({
            scrollTop: pagepos
        }, 800, function () {
            prot = 0;
        });

        chgBnav();


        $('.bnav li a').click(function () {
            $(this).parent().addClass('selB').siblings().removeClass('selB');
        });
    });



    $('.bnav li a').click(function (e) {

        console.log('a클릭');

        e.preventDefault();

        var idx = $(this).parent().index();
        console.log(idx);

        pno = idx;
        console.log('변경된 pno번호: ' + pno);

        var pid = $(this).attr('href');
        console.log('클릭된 a의 href값: ' + pid);

        var pagepos = $(pid).offset().top;


        $('html, body').animate({
            scrollTop: pagepos
        }, 800);

        chgBnav();

    });

});



$(document).ready(function () {

    var width = $('.news-slide').width(), //884???
        count = $('.viewer li').length; //총 4개
    console.log(width, count);


    var currentPage = 0; //내가 처음에보고있는곳이랬음


    var changePage = function () {
        $('.news-slide > .viewer').animate({
            marginLeft: -(currentPage * width) / 2
        });
    };

    $('.arr-right').click(function (e) {
        e.preventDefault();

        if (currentPage < count - 2) {
            currentPage++;
            changePage();
        }
        //console.log(currentPage); 
    });


    $('.arr-left').click(function (e) {
        e.preventDefault();

        if (currentPage > 0) {
            currentPage--;
            changePage();
        }
    });




    //한버튼씩 되나 해본것
    /* $('.arr-right').click(function () {
        $('.viewer').animate({
            marginLeft: '-50%'
        });
    });

    $('.arr-left').click(function () {
        $('.viewer').animate({
            marginLeft: '0'
        });
    }); */

});



/* var imgIdx = $('.img-wrap li a').parent().index();

//var iconIdx = $('.product-icon li a').parent().index();

$(document).ready(function () {
    $('.product-icon li a').click(function (e) { 
        e.preventDefault();
        //console.log('클릭?');  
        var iconIdx = $(this).parent().index();
        //console.log(iconIdx); 



    });
});
 */


/* var iconIdx = $('.product-icon li').index(); */







$(document).ready(function () {
    $('.product-icon li a').click(function (e) {
        e.preventDefault();
        var iconIdx = $(this).parent().index();
        console.log(iconIdx);

        //아이콘 호버상태바꾸기
        $(this).parent().addClass('on').siblings().removeClass('on');



        //오른쪽 이미지 돌아가게 바꾸기
        $('.img-wrap').animate({
            marginLeft: -(100 * iconIdx) + '%'
        }, 800);

        //아래 설명 글자 돌아가게 바꾸기
        $('.product-txt').animate({
            marginLeft: -(100 * iconIdx) + '%'
        }, 0.5);

        $('.product-txt').children('li').addClass('active').siblings().removeClass('active');

    });
});


