export default {
    nextPage(state, payload) {
        console.log("i am running inside mutation nextPage with " + JSON.stringify(state) + "and payload " + payload);
        console.log("updating state");
        console.log("previous state is : " + JSON.stringify(state));
        state.pages.push(payload);
        state.currentPage = payload;
        console.log("updated state is : " + JSON.stringify(state));
        return state;      
    },
    previousPage(state, payload) {        
        console.log("i am running inside mutation previousPage with " + JSON.stringify(state) + "and payload " + payload);
        console.log("previous state is : " + JSON.stringify(state));
        state.pages.splice(-1, 1);

        state.currentPage = state.pages.slice(-1).pop();
        console.log("updated state is : " + JSON.stringify(state));
        return state; 
    }
    
};