import actions from './actions.js';
import mutations from './mutations.js';
import state from './state.js';
import Page from './page.js';
import config from '../config/config.js'

export default new Page({
  actions,
  mutations,
  state,
  config: config.page_config
});


