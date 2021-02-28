export default class PubSub {
    constructor() {
      this.events = {};
    }

    // subscribing to some event
    subscribe(event, callback) {

        let self = this;
      
        if(!self.events.hasOwnProperty(event)) {
          self.events[event] = [];
        }
        console.groupCollapsed(`SUBSCRIBE: ${event}`);

        console.log("subscribing with event : ", JSON.stringify(event));
        console.groupEnd();
      
        return self.events[event].push(callback);
      }

      // publishing some event
      publish(event, data = {}) {

        let self = this;
      
        if(!self.events.hasOwnProperty(event)) {
          return [];
        }
        console.groupCollapsed(`PUBLISH: ${event}`);
        console.log("PUBLISHing with data : ", JSON.stringify(data));

        console.groupEnd();
      
      
        return self.events[event].map(callback => callback(data));
      }
  }