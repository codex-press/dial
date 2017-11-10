import * as dom from '/parent/core/dom.js'
import * as selectors from '/parent/src/selectors.js'


export default class Header {

  constructor({ store }) {
    this.store = store
    this.store.subscribe(() => this.update())
    this.update()

    const el = dom.one('body > header')
    const open = e => el.addClass('active')
    const close = e => el.removeClass('active')
    el.delegate('click', '.open', open)
    el.delegate('click', '.close, a', close)
  }


  update() {
    const stream = selectors.stream(this.store)
    const index = selectors.streamIndex(this.store)

    // only update if there's actually a difference
    if (this.stream === stream && this.index === index) return
    this.stream = stream
    this.index = index

    const paths = selectors.streamPaths(this.store)

    if (!paths || paths.length === 1) {
      dom.elem('body > header .dots').innerHTML = ''
    }
    else {
      // XXX should slice based on index
      const start = Math.floor(index / 10) * 10
      console.log({ start })
      const dotHTML = paths.slice(start, start + 11).map((p,i) => {
        const active = index - start === i ? 'active' : ''
        return `
          <a class="dot ${ active }"
            href="${ p }"
            data-in-stream="true">
          </a>
        `
      }).join('') 

      dom.elem('body > header .dots').innerHTML = dotHTML 
    }

  }

}



// let lastMax = 0;
// let lastScroll = 0;
// let resetDebounced = u.debounce(500, () => lastMax = article.scroll());

// article.on('scroll', () => {

//   let shouldHide = (
//     article.scroll() > 0 &&
//     (article.scroll() > lastScroll || article.scroll() > lastMax - 100)
//   );

//   if (shouldHide)
//     dom('#dial-menu .bar').addClass('hide')
//   else
//     dom('#dial-menu .bar').removeClass('hide')

//   lastScroll = article.scroll();

//   if (article.scroll() > lastMax)
//     lastMax = article.scroll();

//   resetDebounced();
// });


