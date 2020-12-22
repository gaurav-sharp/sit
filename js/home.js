$('.home__service--content').slick({
    centerMode: true,
    slidesToShow: 3,
    prevArrow:"<img class='slick-prev' src='/images/services/prev.svg'>",
    nextArrow:"<img class='slick-next' src='/images/services/next.svg'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 1
            }
        }
    ]
});

$('.home__ourClient--cards').slick({
    slidesToShow: 3,
    prevArrow:"<img class='slick-prev' src='/images/services/prev.svg'>",
    nextArrow:"<img class='slick-next' src='/images/services/next.svg'>",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                slidesToShow: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrows: false,
                slidesToShow: 1
            }
        }
    ]
});


$('.home__whoweare--text-action a').magnificPopup({
    items: {
        src: 'https://vimeo.com/490687106?autoplay=1'
    },
    type: 'iframe'
});

