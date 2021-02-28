import Widget from '../lib/widget.js';
import page from '../page/index.js';

export default class DetailPageWidget extends Widget {
  constructor() {
    super({
      page,
      element: document.querySelector('.center-widget')
    });
  }

  render() {
    
    if(page.state.currentPage === 'detail-page-1'){
      // console.log("i am here in detail page with page state" + JSON.stringify(page.state));
      console.log("rendering detail page");
        this.element.innerHTML = `<small> Detail Page </small>`;
    }     
  }
}