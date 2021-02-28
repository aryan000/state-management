import Widget from '../lib/widget.js';
import page from '../page/index.js';

export default class InterstitialPageWidget extends Widget {
  constructor() {
    super({
      page,
      element: document.querySelector('.center-widget')
    });
  }

  render() {
    
    if(page.state.currentPage === 'interstitial-page-1'){
      // console.log("i am here in detail page with page state" + JSON.stringify(page.state));
      console.log("rendering interstitial page");
        this.element.innerHTML = `<small> Interstitial Page </small>`;
    }     
  }
}