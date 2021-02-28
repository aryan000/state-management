import Page from '../page/page.js'


export default class Widget{

    constructor(props = {}){
        let self = this;

        this.render = this.render || function (){};

        if(props.page instanceof Page){
            props.page.events.subscribe('stateChange', () => self.render() );            
        }

        if(props.hasOwnProperty('element')){
            this.element = props.element;
        }
    }
}