$(document).ready(function () {
  // верхний слайдер
  $('.top-slider__slides').slick({
    customDirectionNav: $(".top-slider"),
    prevArrow: $(''),
    nextArrow: $('.top-slider__arrow-right')
  });

  // вывод общего колличества слайдов
  var totalSlides=$('.top-slider__slides');
  $('.total-slides').html( totalSlides.slick("getSlick").slideCount);

  // вывод текущего слайда
  $(".top-slider__slides").on("afterChange", function(event, slick, currentSlide){
    $(".selected-slide").text(currentSlide + 1);
  });


  // comments__list

  $('.comments__list').slick({
    customDirectionNav: $(".comments__wrapper"),
    prevArrow: $('.comments__arrow-left'),
    nextArrow: $('.comments__arrow-right')
  });


  // team-slider
  $('.team__list').slick({
    customDirectionNav: $(".team__wrapper"),
    slidesToShow: 3,
    prevArrow: $('.team__arrow-left'),
    nextArrow: $('.team__arrow-right'),
    responsive: [{
        breakpoint: 768,
        settings: {
          nextArrow: $(''),
          centerMode: true,
          slidesToShow: 1,
        }
      }
    ]
  });


  // middle-slider

  $('.middle-slider__list').slick({
    prevArrow: $(''),
    nextArrow: $('.middle-slider__arrow-right'),
  });


  // photo-gallery

  $('.photo-gallery__list').slick({
    prevArrow: $(''),
    nextArrow: $('.photo-gallery__arrow-right'),
    responsive: [{
      breakpoint: 768,
      settings: {
        arrows: false
      }
    }]
  });

  // text-slider
  $('.text-slider__list').slick({
    prevArrow: $(''),
    nextArrow: $('.text-slider__arrow-right')
  });

});
