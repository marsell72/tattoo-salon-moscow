$(document).ready(function(){
    $('.stock-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
});

$(document).ready(function(){
    $('.masters-cards').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
});

$(document).ready(function(){
    $('.reviews-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
});

$(document).ready(function(){
    $('.usefull-articles-slider').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1201,
                settings: {
                    arrows: true,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    }); 
});


$(function() {
    var $speed = 200;
    var $class = 'opened';
    var $class_open = '.faq-item__answer';
  
    $(document).ready(function() {
      $('.faq-item').on('click', function() {
        $ul = $(this).closest('ul');
        $answer = $(this).closest('li').find($class_open);
  
        if (!$(this).closest('li').hasClass($class)) {
  
          $ul.find('li').each(function() {
            if ($(this).hasClass($class))
              $(this).removeClass($class).find($class_open).slideUp($speed);
          });
        }
  
        $answer
          .slideToggle($speed)
          .closest('li')
          .toggleClass($class);
      });
    });
  });


  //popup

  $(document).ready(function(){
      $('.consult-info__btn').click(() => {
        $('.main-popup').css('display', 'flex');
      });


      $('.main-popup__close-btn').click(() => {
        $('.main-popup').css('display', 'none');
      });
    
      $('.main-popup').click(() => {
        $('.main-popup').css('display', 'none');
      });
});