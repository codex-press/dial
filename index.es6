import article from 'article';
import dom from 'dom';
import * as env from 'env';
import * as u from 'utility';

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

$(document).ready(function(){
    
    var getMax = function(){
        return $(document).height() - $(window).height();
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }
});
