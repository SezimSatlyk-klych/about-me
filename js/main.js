$(document).ready(function(){
  let $btns = $('.button_group .bt'); // Corrected button selector
  $btns.click(function(e){
    $('.button_group .bt').removeClass('active'); // Corrected removeClass method and button selector
    $(this).addClass('active'); // Add 'active' class to the clicked button
    let selector = $(this).attr("data-filter"); // Get the data-filter attribute value of the clicked button
    $('.row-grid').isotope({ // Corrected Isotope initialization and container selector
      filter: selector
    });
    return false;
  });
  $(document).ready(function() {
    // Trigger click event on button with id btn1
    $('#btn1').trigger("click");
  
    // Initialize Magnific Popup for elements with class test-popup-link
    $('.test-popup-link').magnificPopup({
      type: 'image',
  gallery: {
    enabled: true
  }

    });
  });

  
  $(document).ready(function() {
    $(".owl-carousel").owlCarousel({
      loop: true,
      autoplay: true,
      dots: true,
      responsive:{
        0:{
          items:1

        },
        544:{
          items:2


        }
      }
    });
  });


  //sticky navigation menu

  $(document).ready(function() {
  let nav_offset_top = $('.header_area').height() + 50;

  function navbarFixed() {
    if ($('.header_area').length) {
      $(window).scroll(function() {
        let scroll = $(window).scrollTop();
        if (scroll >= nav_offset_top) {
          $(".header_area.main-menu").addClass("navbar_fixed");
        } else {
          $(".header_area.main-menu").removeClass("navbar_fixed");
        }
      });
    }
  }

  navbarFixed();
});


  

  






  
});
