const nextIcon = '<img src="img/Arrow-r-n.png">' 
const prevIcon = '<img src="img/arrow-l-n.png">'
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:10,
        nav:true,
        navText: [
          nextIcon,
          prevIcon
        ],
        autoplay:true,
        dots:false,
        responsiveClass:true,
        responsive:{
            0:{
                items:2,
            },
            600:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    })
  });
