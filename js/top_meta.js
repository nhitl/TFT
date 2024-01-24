$(function () {
    $(".slider_rate_content").slick({
      slidesToShow: 3,
      slidesToScroll: 1,
      speed: 500,
      dots: true,
      arrows: true,
      centerMode: false,
      focusOnSelect: false,
      autoplay: false,
      autoplaySpeed: 2000,
      slide: "div",
      nextArrow: ' <img class="btn-left"  src="image/right.png" alt="">',
      prevArrow: '<img class="btn-right" src="image/left.png" alt="">',
    });
  });
  