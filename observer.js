/*
With the observer pattern,
 we can subscribe certain objects,
  the observers, to another object, 
  called the observable. Whenever an event occurs, the observable 
notifies all its observers!*/

//observers->list which gets notifies when event occurs
//subscribe->method to add observer to observers list
//unsub->method to remove observer from list
//notify->method to notify all observers whenever a specific event occurs
class Observable {
    constructor() {
      this.observers = [];
    }
  
    subscribe(func) {
      this.observers.push(func);
    }
  
    unsubscribe(func) {
      this.observers = this.observers.filter((observer) => observer !== func);
    }
  
    notify(data) {
      this.observers.forEach((observer) => observer(data));
    }
  }