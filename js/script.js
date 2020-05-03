$(document).ready(function(){
  $('.header_burger').click(function(event) {
    $('.header_burger, .header_menu').toggleClass('turn');
    $('body').toggleClass('lock');
    });
  $('.header_nav').click(function(event) {
    $('.header_burger, .header_menu').removeClass('turn');
    $('body').removeClass('lock');
  });
  $('.features_slider').slick({
      infinite: true,
slidesToShow: 4,
slidesToScroll: 4,
infinite: true,
speed: 300,
slidesToShow: 4,
slidesToScroll: 4,
responsive: [
  {
    breakpoint: 992,
    settings: {
      slidesToShow: 2,
      prevArrow: '<button class="prev arrow_btn"></button>',
      nextArrow: '<button class="next arrow_btn"></button>',
      slidesToScroll: 2
    }
  },
  {
    breakpoint: 767,
    settings: {
      slidesToShow: 1,
      prevArrow: '<button class="prev arrow_btn"></button>',
      nextArrow: '<button class="next arrow_btn"></button>',
      slidesToScroll: 1
    }
  }
]
    });
  });