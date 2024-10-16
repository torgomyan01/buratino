$(document).ready(function () {


$(".footer .links h2").on("click", function(){
  $(this).find("img").toggleClass("rotate");
  $(this).closest(".links").find("a").toggleClass("hide");
})

$(".expand").on("click", function(){
  $(this).closest(".wrapper").find(".texts").toggleClass("show");
  $(this).closest(".wrapper").find(".texts  img").toggleClass("hide");
  if($(".texts").hasClass("show")){
    $(".expand").text("Скрыть полностью");
  }
  else{
    $(".expand").text("Раскрыть полностью");
  }
})

function initSlickSlider2() {
  if ($(window).width() < 1201) {
    if (!$(".instagram-slider").hasClass("slick-initialized")) {
      $(".instagram-slider").slick({
        dots: false,
        arrows: false,
        slidesToShow: 1,
        slideToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1000,
      });
    }
  } else {
    if ($(".instagram-slider").hasClass("slick-initialized")) {
      $(".instagram-slider").slick("unslick");
    }
  }
}

initSlickSlider2();

$(window).resize(function () {
  initSlickSlider2();
});

$(".stock-slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 3,
  slideToScroll: 1,
  prevArrow: $(
    ".stock-slider-wrap .slider-navigation .slick-prev"
  ),
  nextArrow: $(
    ".stock-slider-wrap .slider-navigation .slick-next"
  ),
  responsive: [
    {
      breakpoint: 1201,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
    },
    {
      breakpoint: 768,
      settings: {
        autoplay: true,
        autoplaySpeed: 1000,
        variableWidth: true,
        slidesToShow: 1,
        dots: false,
        arrows: false,
      }
    },
  ]
});


$(".info-slider").slick({
  dots: false,
  arrows: false,
  slidesToShow: 3,
  slideToScroll: 1,
  responsive: [
    {
      breakpoint: 1351,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
    },
  ]
});

$(".new-slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slideToScroll: 1,
  prevArrow: $(
    ".new-wrap .title-wrap .slider-navigation .slick-prev"
  ),
  nextArrow: $(
    ".new-wrap .title-wrap .slider-navigation .slick-next"
  ),
  responsive: [
    {
      breakpoint: 1301,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
    },
  ]
});

$(".popular-slider").slick({
  dots: true,
  arrows: true,
  slidesToShow: 4,
  slideToScroll: 1,
  prevArrow: $(
    ".popular-wrap .title-wrap .slider-navigation .slick-prev"
  ),
  nextArrow: $(
    ".popular-wrap .title-wrap .slider-navigation .slick-next"
  ),
  responsive: [
    {
      breakpoint: 1301,
      settings: {
        variableWidth: true,
        slidesToShow: 1,
      }
    },
  ]
});

$(".basket-button").on("click", function(){
  $(this).hide();
  $(this).closest(".basket-buttons").find(".add-basket").addClass("show");
})

$(".heart .icon").on("click", function(){
  $(this).toggleClass("active");
})


});
