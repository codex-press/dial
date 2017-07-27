import $ from 'jquery';
import article from 'article';
import 'slick-carousel';

article.ready.then(() => {

  window.addEventListener('resize', resize);
  resize();

});


let lastWidth = 100000;

function resize() {
  if (lastWidth > 2500 && window.innerWidth < 2500)
    on();
  else if (lastWidth < 2500 && window.innerWidth > 2500)
    off();
  lastWidth = window.innerWidth;
}

function off() {
  $('.feature-container').slick('unslick');
}

function on() {
  $('.feature-container').slick({
    centerMode: false,
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
          dots: false,
          focusOnSelect: true,
          arrows: false,
          centerMode: false,
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
