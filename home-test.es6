import $ from 'jquery';
import article from 'article';
import 'slick-carousel';

article.ready.then(() => {

  window.addEventListener('resize', resize);
  resize();

});


let lastWidth = 100000;

function resize() {
  if (lastWidth > 800 && window.innerWidth < 800)
    on();
  else if (lastWidth < 800 && window.innerWidth > 800)
    off();
  lastWidth = window.innerWidth;
}

function off() {
  $('.card-container').slick('unslick');
}

function on() {
  $('.card-container').slick({
    centerMode: true,
    infinite: false,
    centerPadding: '60px',
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
          initialSlide: 0,
          infinite: false,
          variableWidth: true,
          centerPadding: '40px',
          slidesToShow: 1,
          speed: 150,
        }
      }
    ]
  });
}
