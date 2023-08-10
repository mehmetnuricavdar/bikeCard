import { LightningElement } from 'lwc';

export default class MyComponent extends LightningElement {
    ready = false;

    connectedCallback(){
        setTimeout(()=>{
            this.ready = true;
        }, 3000)
    }
}