new WOW().init();
const nextIcon = '<img src="assets/images/icons/next.svg" alt="right">';
const prevIcon = '<img src="assets/images/icons/prev.svg" alt="left" >';
$('.owl-carousel').owlCarousel({
    rtl:true,
    loop:true,
    margin:30,
    responsiveClass:true,
    navText: [
        prevIcon,
        nextIcon
      ],
      autoplay:true,
      autoplayTimeout:3000,
      autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        800:{
            items:2,
            nav:false
        },
        1000:{
            items:3,
            nav:true,
            loop:true
        }
    }
})


