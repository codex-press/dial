import $ from 'jquery';
import article from 'article';
import 'slick-carousel';

article.ready.then(() => {

  $('.feature-container').slick({
    centerMode: true,
    infinite: false,
    centerPadding: '40px',
    slidesToShow: 3,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 800,
        settings: "unslick"
      },
      {
        breakpoint: 310,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });
})
