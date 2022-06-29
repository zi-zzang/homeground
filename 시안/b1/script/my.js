$(function(){
    //메뉴 호버
    $('.main li').on('mouseover',function(){
        $('.sub').stop().fadeIn();
    });
    $('.sub').on('mouseout',function(){
        $('.sub').stop().fadeOut(); 
    });
    //이미지 슬라이드
    var idx=0;
    setInterval(slide,3000);
    function slide(){
        idx < 2 ? idx++ : (idx = 0);
        $('.slide li').animate({left:-(idx*1200)+'px'});
    }
    //탭 메뉴
    $('c1 h2').on('click',function(){
        $('c1 h2').removeClass('act');
        $(this).addClass('act');
        $('c1 ul').hide();
        $(this).next('ul').show();
    });
    //팝업
    $('.fst').click(function(){
        $('#modal').show();
    });
    $('#modal button').click(function(){
        $('#modal').hide();
    });
});
