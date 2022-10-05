
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function () {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 500);
    });
}
// $(window).load(function() {
//     $('#loading').fadeToggle();
//     // initialize();
// });

// $(window).scroll(function() {
//     var scroll = $(window).scrollTop();
//     if (scroll >= 5) {
//         $(".custom-nav").addClass("fixed-navbar");
//     }else{
//         $(".custom-nav").removeClass("fixed-navbar");
//     }
// });


// $(document).ready(function(){
//     let owl = $('#main-banner-slider').owlCarousel({
//         loop: false,
//         autoplay: true,
//         responsiveClass: true,
//         items: 1,
//         nav: false,
//         dotsContainer: '#carousel-custom-dots',
//     })
//     $( '.owl-dot' ).on( 'click', function() {
//         owl.trigger('to.owl.carousel', [$(this).index(), 300]);
//         $( '.owl-dot' ).removeClass( 'active' );
//         $(this).addClass( 'active' );
//         console.log($(this).index());
//     });
// });

$('#rd-banner-slider').owlCarousel({
    loop: false,
    autoplay: true,
    responsiveClass: true,
    items: 1,
    nav: false,
    dots: true
});

$('#rpc-item-slider').owlCarousel({
    loop: false,
    autoplay: true,
    margin: 10,
    responsiveClass: true,
    navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        768: {
            items: 2,
            nav: true,
            dots: false,
            margin: 20
        },
        1024: {
            items: 3,
            nav: true,
            dots: false,
            margin: 30
        }
    }
});
$('#tci-item-slider').owlCarousel({
    loop: false,
    autoplay: true,
    // mouseDrag: false,
    margin: 10,
    responsiveClass: true,
    navText: ["<i class='bi bi-arrow-left-short'></i>","<i class='bi bi-arrow-right-short'></i>"],
    responsive: {
        0: {
            items: 1,
            nav: true,
            dots: false
        },
        768: {
            items: 2,
            nav: true,
            dots: false,
            margin: 20
        },
        1024: {
            items: 3,
            nav: true,
            dots: false,
            margin: 30
        }
    }
});

// Gallery function

(function() {
    var $gallery = new SimpleLightbox('.details-gallery a', ['&lsaquo;','&rsaquo;']);
})();

