//메뉴 호버
$(function () {
  $('.main>li').on('mouseenter', function () {
    $('ul:first', this).stop().fadeIn();
  });
  $('.main>li').on('mouseleave', function () {
    $('ul:first', this).stop().fadeOut();
  });
  $('.icon>li:first-child').click(function () {
    $('.i_search').show();
  });
  $('.icon>li:first-child').click(function () {
    $('.i_search').hide();
  });
});

//slick
$(document).ready(function () {
  $('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });

  //메뉴 상단고정
  var scroll = $('#head').offset();
  $(window).scroll(function () {
    if ($(document).scrollTop() > scroll.top) {
      $('.navbox').stop().animate({ top: 0 }, 300);
    } else {
      $('.navbox').stop().animate({ top: 145 }, 300);
    }
  });

  //우편번호
  function openZipSearch() {
    new daum.Postcode({
      oncomplete: function (data) {
        $('[name=o_zip]').val(data.zonecode); // 우편번호 (5자리)
        $('[name=o_add1]').val(data.address);
        $('[name=o_add2]').val(data.buildingName);
      },
    }).open();
  }

  //로그인 탭
  //   $('.loginbox button[type=button]').click(function () {
  //     $('.loginbox button[type=button]').removeClass('act');
  //     $(this).addClass('act');
  //     $('.loginbox div:first-child').hide();
  //     $(this).siblings().show();
  //   });

  //다크모드
  $('.btn_dark').on('click', function () {
    $(this).text($(this).text() == '다크모드' ? '라이트모드' : '다크모드');
    $('body, #head, .logo a, .navbox, .main > li, section#item, section a img, footer .wrap, .main > li a').toggleClass('dark');
  });
});
