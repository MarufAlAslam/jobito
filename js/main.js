$('.category-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});



$('.portfolio-slider').slick({
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: '<button class="btn prevBtn"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button class="btn nextBtn"><i class="fa fa-angle-right"></i></button>',
});

$('.editBtn').click(function () {
    $('.project form').hide();
    $(this).parent().parent().parent().children('form').show();
});


$('.filterBtn').click(function () {
    $('.col-md-4.p-4.filters').toggleClass('active');
})



if ($(window).width() <= 767) {
    console.log("got it")
    $('.hasChild a').click(function (e) {
        e.preventDefault()
        $('.sub-menu').toggle()
    })
}