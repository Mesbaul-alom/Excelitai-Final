 


 //nav bar scroll add bg-color
 $(window).scroll(function() {    
    var scroll = $(window).scrollTop();    
    if (scroll <= 600) {
        $(".main-menu").addClass("darkHeader");
    }
});

//about-filter
$(function($) {
    $.autofilter();
});
  // active class add remove 
  $('.about-filter ul li').click(function(){
    $('.about-filter ul li').removeClass('active');
    $(this).addClass('active');

    // data filter 
    var selector = $(this).attr('data-filter');
    $('.portfolio-item-wrapper').isotope({
      filter:selector
    });
    return false; 

  });



// for testimonial
$(document).ready(function(){
   
  $(".owl-carousel").owlCarousel();
});


$('.owl-carousel').owlCarousel({
loop:true,
autoplay:true,
dots:false,
autoplayTimeout:3000,
margin:10,
responsiveClass:true,
responsive:{
    0:{
        items:1,
        nav:false
    },
    600:{
        items:1,
        nav:false,
        loop:true
    },
    1000:{
        items:1,
        nav:false,
        dots:false,
        loop:true
    }
}
})
// testimonial end

// for counting 
$(document).ready(function(){
    $('.counter-value').each(function(){
        $(this).prop('Counter',0).animate({
            Counter: $(this).text()
        },{
            duration: 3500,
            easing: 'swing',
            step: function (now){
                $(this).text(Math.ceil(now));
            }
        });
    });
});
// counting js end





// for client review

 jQuery(document).ready(function ($) {
    var feedbackSlider = $(".feedback-slider");
     feedbackSlider.owlCarousel({
items: 1,
nav: true,
dots: true,
autoplay: true,
loop: true,
mouseDrag: true,
touchDrag: true,
navText: [
  "<i class='fa fa-long-arrow-left'></i>",
  "<i class='fa fa-long-arrow-right'></i>"
],
    responsive: {
    // breakpoint from 767 up
    767: {
        nav: true,
        dots: false
    }
    }
    });

    feedbackSlider.on("translate.owl.carousel", function () {
    $(".feedback-slider-item h3")
    .removeClass("animated fadeIn")
    .css("opacity", "0");
    $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
    .removeClass("animated zoomIn")
    .css("opacity", "0");
    });

    feedbackSlider.on("translated.owl.carousel", function () {
        $(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
        $(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
        .addClass("animated zoomIn")
        .css("opacity", "1");
    });
    feedbackSlider.on("changed.owl.carousel", function (property) {
        var current = property.item.index;
        var prevThumb = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("img")
        .attr("src");
        var nextThumb = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("img")
        .attr("src");
        var prevRating = $(property.target)
        .find(".owl-item")
        .eq(current)
        .prev()
        .find("span")
        .attr("data-rating");
        var nextRating = $(property.target)
        .find(".owl-item")
        .eq(current)
        .next()
        .find("span")
        .attr("data-rating");
        $(".thumb-prev").find("img").attr("src", prevThumb);
        $(".thumb-next").find("img").attr("src", nextThumb);
        $(".thumb-prev").find("span").next().html(prevRating + '<i class="fa fa-star"></i>');
        $(".thumb-next")
        .find("span")
        .next().html(nextRating + '<i class="fa fa-star"></i>');
    });
    $(".thumb-next").on("click", function () {
    feedbackSlider.trigger("next.owl.carousel", [300]);
    return false;
    });
    $(".thumb-prev").on("click", function () {
    feedbackSlider.trigger("prev.owl.carousel", [300]);
    return false;
    });
    }); //end ready


    


