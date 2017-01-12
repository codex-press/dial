import article from 'article';
import dom from 'dom';

article.ready.then(() => {

  dom('#dial-menu .open').on('click', e => {
    dom('#dial-menu').addClass('active')
  });

  dom('#dial-menu .close').on('click', e => {
    dom('#dial-menu').removeClass('active')

  });

});
