import article from 'article';
import dom from 'dom';
import * as env from 'env';
import * as u from 'utility';
import {typekit} from 'utility';

// Proxima Nova: regular, italic, bold italic

typekit({kitId: 'jtj0kdc'});

article.ready.then(() => {

  // iPhone hack
  if (env.device.iOS)
    dom.body().insertAfter(dom.first('#dial-menu'));

  dom('#dial-menu .open').on('click', e => {
    dom('#dial-menu').addClass('active')
  });

  dom('#dial-menu .close').on('click', e => {
    dom('#dial-menu').removeClass('active')
  });

});

let lastMax = 0;
let lastScroll = 0;
let resetDebounced = u.debounce(500, () => lastMax = article.scroll());

article.on('scroll', () => {

  let shouldHide = (
    article.scroll() > 0 &&
    (article.scroll() > lastScroll || article.scroll() > lastMax - 100)
  );

  if (shouldHide)
    dom('#dial-menu .bar').addClass('hide')
  else
    dom('#dial-menu .bar').removeClass('hide')

  lastScroll = article.scroll();

  if (article.scroll() > lastMax)
    lastMax = article.scroll();

  resetDebounced();
});


