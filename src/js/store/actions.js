export default {
    addItem(context, payload) {
      console.log("qwerty adding in actions");
      context.commit('addItem', payload);
    },
    clearItem(context, payload) {
      context.commit('clearItem', payload);
    }
  };