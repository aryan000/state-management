import Widget from '../lib/widget.js';
import page from '../page/index.js';

export default class LandingPageWidget extends Widget {
  constructor() {
    super({
      page,
      element: document.querySelector('.center-widget')
    });
  }

  render() {
    
    if(page.state.currentPage === 'landing-page-1'){
        this.element.innerHTML = `<small> Landing Page </small>`;
    }     
  }
}