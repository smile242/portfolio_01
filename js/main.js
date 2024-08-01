$(function () {

  //header
  $('.depth2,.depth2_bg,.util_depth2').hide();
  $('#header').mouseenter(function () {
    $('.depth2,.depth2_bg,.util_depth2').stop().fadeIn();
  });

  $('#header').mouseleave(function () {
    $('.depth2,.depth2_bg,.util_depth2').stop().fadeOut();
  });

  //header - scroll
  let header = $('#header');
  $(window).scroll(function(){
    if($(this).scrollTop() > 0 && $(this).scrollTop() < 300){
      header.addClass('on');
    } else{ 
      header.removeClass('on');
    }
  });

  //go-top
  let goTop = $('.go_top');
  $(window).scroll(function(){
    if($(this).scrollTop() > 500){
      goTop.fadeIn().show();
    }else{
      goTop.fadeOut().hide();
    }
  });

  //mgnb
  $('.mdepth2, .mgnb_wrap, .dim').hide();
  $('.ham').click(function () {
    $('.mgnb_wrap ,.dim').fadeIn();
    $('.mgnb').animate({
      'right': '0'
    });
  });

  $('.mgnb_close').click(function () {
    $('.mgnb_wrap ,.dim').fadeOut();
    $('.mgnb').animate({
      'right': '-100%'
    });
  });

  $('.mgnb > li').click(function () {
    $(this).find('.mdepth2').slideDown();
    $(this).siblings().find('.mdepth2').slideUp();
  });


  //mv
  const mv = new Swiper('.mv', {
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    speed: 3000,
    pagination: { // 슬라이드 갯수(하단 불릿기호) - 태그추가
      el: ".swiper-pagination",
      type: "progressbar", // 기본타입 bullets, fraction , progressbar
      clickable: true, //클릭가능여부 false(기본값)
    },
  });

  //leader 왼쪽
  const l_img = new Swiper('.l_img', {
    effect: "fade",//페이드 효과
    fadeEffect: {
      crossFade: true
    },
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    speed: 1000,
  });

  // leader 오른쪽
  const l_txt = new Swiper('.l_txt', {
    pagination: { // 슬라이드 갯수(하단 불릿기호) - 태그추가
      el: ".inner .swiper-pagination",
      type: "bullets", // 기본타입 bullets, fraction , progressbar
      clickable: true, //클릭가능여부 false(기본값)
    },
  });

  l_txt.controller.control = l_img;
  l_img.controller.control = l_txt;

  //investors
  $(".investors_right > div").not(":first").hide();
  $(".investors_left ul li").click(function () {
    $(this).addClass("active").siblings().removeClass("active");
    let idx = $(this).index();
    $(".investors_right > div").eq(idx).fadeIn(500).siblings().fadeOut(0);
  });
}); 