import PubSub from '../lib/pubsub.js';

export default class Page {
    constructor(params) {
        let self = this;
        self.actions = {};
        self.mutations = {};
        self.state = {};
        self.status = 'resting';
        self.events = new PubSub();
        self.config = {}

        if(params.hasOwnProperty('actions')) {
            self.actions = params.actions;
        }
        
        if(params.hasOwnProperty('mutations')) {
        self.mutations = params.mutations;
        }

        if(params.hasOwnProperty('config')){
          self.config = params.config;
        }

        self.state = new Proxy((params.state || {}), {
        set: function(state, key, value) {
        
            state[key] = value;
        
            console.log(`stateChange: ${key}: ${value}`);
        
            self.events.publish('stateChange', self.state);
        
            if(self.status !== 'mutation') {
                console.warn(`You should use a mutation to set ${key}`);
            }
        
            self.status = 'resting';
        
            return true;
        }
        });
    }


    getNextPage(){

      console.log("current config is : " + JSON.stringify(this.config));
      let index = this.config.findIndex(page => page === this.state.currentPage);
      console.log("found index is  : " + index);
      console.log("current page is : " + this.state.currentPage);
      if(index >= 0){
        console.log("next page is : " + this.config[index+1]);
        return this.config[index+1];
      }
      console.log("next default page is : " + this.config[0]);
      return this.config[0];
    }

    dispatch(actionKey, payload) {

        let self = this;
      
        if(typeof self.actions[actionKey] !== 'function') {
          console.error(`Action "${actionKey} doesn't exist.`);
          return false;
        }
      
        console.groupCollapsed(`ACTION: ${actionKey}`);
      
        self.status = 'action';
        payload = this.getNextPage();
        console.log("calling action : " + actionKey);
        self.actions[actionKey](self, payload);
      
        
        console.groupEnd();
        
        console.log("returning");
        return true;
      }

      commit(mutationKey, payload) {
        let self = this;
        
        console.log("mutation key is : " + mutationKey + " and payload is " + payload);
        

        if(typeof self.mutations[mutationKey] !== 'function') {
          console.log(`Mutation "${mutationKey}" doesn't exist`);
          return false;
        }
      
        self.status = 'mutation';
      
        let newState = self.mutations[mutationKey](self.state, payload);
      
        self.state = Object.assign(self.state, newState);
      
        return true;
      }
  }

