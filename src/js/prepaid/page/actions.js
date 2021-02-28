export default {    
    nextPage(context, payload) {
      console.log("next page action is there with payload" + JSON.stringify(payload));
      context.commit('nextPage', payload);
    },
    previousPage(context, payload) {
      console.log("previous page action is there with payload" + JSON.stringify(payload));
      context.commit('previousPage', payload);
    }
};