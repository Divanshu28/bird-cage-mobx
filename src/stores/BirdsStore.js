import {observable, action, computed} from 'mobx';

class BirdStore {
    @observable birds = []; //these are the properties we want to keep track of.

    //action is a function where you change the value of the property you are observing.
    @action addBird = (bird) => {
        this.birds.push(bird); //doesn't need to be immutable as in redux[under the hood may be its immutable]
    }
    
    //computed function is used to filter/calculation out the data of property we are observing.(perform real time calcultation)
    @computed get birdCount() {
        return this.birds.length;
    }
}

const store = new BirdStore(); //across our app we want single birdstore copy.To deal with one data only.
export default store; //export instance of BirdStore