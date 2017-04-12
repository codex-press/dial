import $ from 'jquery';
import article from 'article';
import 'slick-carousel';

article.ready.then(() => {

  $('.feature-container').slick({
    centerMode: true,
  });

})

