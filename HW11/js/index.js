window.addEventListener('DOMContentLoaded', function() {
    // Header Menu
    document.querySelector('.header-burger').addEventListener('click', function() {
        document.querySelector('.header-menu').classList.toggle('is-active');
    });

    // Swiper slider parameters
    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
        loop: true,

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },

        // Autoplay slider
        autoplay: {
          delay: 5000,
        },
      });

    // Accordion parameters
    $( function() {
      $( "#accordion" ).accordion({
          heightStyle: "content"
      });
    } );

    // Navigation menu scroll
    $(document).ready(function(){
      $("#menu").on("click","a", function (event) {
          event.preventDefault();
          var id  = $(this).attr('href'),
              top = $(id).offset().top;
          $('body,html').animate({scrollTop: top}, 900);
      });
    });
  
    // Navigation mobile menu scroll
    $('.mobile-menu a').on('click', function() {
      let href = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(href).offset().top
      }, {
          duration: 900,   // по умолчанию «400» 
          easing: "linear" // по умолчанию «swing» 
      });
      return false;
    }); 
});