import $ from 'jquery';
import article from 'article';
import 'slick-carousel';

article.ready.then(() => {

  // window.addEventListener('resize', function(){
  //     if(window.innerWidth < 800){


    $('.feature-container').slick({
      centerMode: true,
      infinite: false,
      centerPadding: '40px',
      slidesToShow: 3,
      speed: 150,
      mobileFirst: true,
      variableWidth: true,
      responsive: [
        {
          breakpoint: 310,
          settings: {
            arrows: false,
            centerMode: true,
            infinite: false,
            variableWidth: true,
            centerPadding: '40px',
            slidesToShow: 1,
            speed: 150,
          }
        }
      ]
    });
  // }
  // })
})
