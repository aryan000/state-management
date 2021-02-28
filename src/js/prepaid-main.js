import page from './prepaid/page/index.js'; 

import LandingPageWidget from './prepaid/widgets/landing-page.js';
import DetailPageWidget from './prepaid/widgets/detail-page.js';
import InterstitialPageWidget from './prepaid/widgets/interstitial-page.js';


var click = 0;

  const centerWidget = document.querySelector('.center-widget');
  const previousButtonWidget = document.querySelector('.previous-page');

  centerWidget.addEventListener('click', evt => {
      evt.preventDefault();      
      page.dispatch('nextPage', 'detail-page-1');
      
  });

  previousButtonWidget.addEventListener('click', evt => {
    evt.preventDefault();
    page.dispatch('previousPage', '');
     
})

  const landingPage = new LandingPageWidget();
  const detailPage = new DetailPageWidget();
  const interstitialPage = new InterstitialPageWidget();
  
  landingPage.render();
  detailPage.render();
  interstitialPage.render();