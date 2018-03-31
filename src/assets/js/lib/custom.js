import $ from "jquery";

// alert("test")
$(document).ready(function() {


  // Scroll TOp
  $("#js-scroll-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });


  // scroll animation
  var position = $(window).scrollTop();
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();

    if (scroll > position) {
      $(".c-main-logo").addClass("scroll");
    } else {
      $(".c-main-logo").removeClass("scroll");
    }
    // position = scroll;
  });



  $('#js-view-slider').slick({
    dots: false,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    slidesToShow: 1,
    adaptiveHeight: true
    // adaptiveHeight: true
  });

  

  $('.c-list-hover__link').on({
    mouseenter : function(e){
      var imgLink = $(this).attr("data-img")


      
      if (imgLink) {
      
        $('#js-img-src').attr('src', imgLink);
        $('#js-img-src').removeClass('hide');
        // $(this).next(".js-sm-img-src").attr('src', imgLink);
        // $(this).next(".js-sm-img-src").removeClass('hide');
      }
    },
    mouseleave : function(e){
      $('#js-img-src').addClass('hide');
      // $(this).closest(".js-sm-img-src").addClass('hide')
    },
    click: function(e) {

      $(".js-sm-img-src" ).each(function() {
        // $( this ).addClass( "hide" );
      });
      // $(this).next(".js-sm-img-src").removeClass('hide');

      var imgLink = $(this).attr("data-img")
      console.log("onClick",    $(this).parent(".c-list-hover__item")) 
      $('.c-list-hover').find( '.active' ).removeClass( 'active' );
      $(this).parent('.c-list-hover__item').toggleClass('active');
      $(this).parent(".c-list-hover__item").find(".js-sm-img-src").attr('src', imgLink);
    }
})

  // $( ".c-list-hover__link" ).hover(
  //   function() {
  //     var imgLink = $(this).attr("data-img")
  //     var nextImg = $(this).next(".js-sm-img-src")
  //     if($(this).next(".js-sm-img-src").hasClass( "hide" )) {
  //       $(this).next(".js-sm-img-src").removeClass('hide');
  //       // console.log("XXTEST", $(this).next(".js-sm-img-src").hasClass( "hide" ))
  //     }
  //     console.log("TEST", nextImg)
  //     if (imgLink) {
      
  //       $('#js-img-src').attr('src', imgLink);
  //       $('#js-img-src').removeClass('hide');
  //       $(this).next(".js-sm-img-src").attr('src', imgLink);
  //       $(this).next(".js-sm-img-src").removeClass('hide');
  //     }


  //   }, function() {
  //     $('#js-img-src').addClass('hide');
  //     $(this).next(".js-sm-img-src").addClass('hide')
  //   }
  // );

  // $('.c-list-hover__link').hover(function() {
  //   var imgLink = $(this).attr("data-img")
    
  //   if (imgLink) {
  //     console.log("TEST", imgLink)
  //     $('#js-img-src').attr('src','http://openclipart.org/image/800px/svg_to_png/17103/claudita_home_icon.png');
  //     $('#js-img-src').removeClass('hide');
  //   } else {
  //     $('#js-img-src').addClass('hide');
  //   }
  // })

  $(".js-modal-open").click(function() {

    // $('.c-reveal').foundation('open', function() {

    // });

    //Slick JS start
    var $gallery = $("#js-modal-slider");
    var slideCount = null;

    $gallery.on("init", function(event, slick) {
      // console.log(slick.slideCount);
      // console.log(slick, "Test");
      console.log("fired!");
      $gallery.fadeIn(3000);
      slideCount = slick.slideCount;
      setSlideCount();
      setCurrentSlideNumber(slick.currentSlide);
    });

    $gallery.on("beforeChange", function(
      event,
      slick,
      currentSlide,
      nextSlide
    ) {
      setCurrentSlideNumber(nextSlide);
    });

    function setSlideCount() {
      var $el = $(".c-slide-count").find(".c-slide-count__total");
      $el.text(slideCount);
    }

    function setCurrentSlideNumber(currentSlide) {
      var $el = $(".c-slide-count").find(".c-slide-count__current");
      $el.text(currentSlide + 1);
      // console.log("current", currentSlide);
    }
    $gallery.slick({
      dots: false,
      infinite: true,
      speed: 500,
      fade: true,
      cssEase: "linear",
      slidesToShow: 1,
      adaptiveHeight: true
    });
  });
});
