class Subject {
    constructor() {
        this.observers = [];
    }

    subscribe(fn) {
        this.observers.push(fn);
    }

    unsubscribe(fnToRemove) {
        this.observers = this.observers.filter(fn => fn !== fnToRemove);
    }

    fire() {
        this.observers.forEach(fn => {
            fn.call();
        });
    }
}

const sub = new Subject();

function observer1() {
    console.log("observer1 fired");
}

function observer2() {
    console.log("observer2 fired");
}

sub.subscribe(observer1);
sub.subscribe(observer2);
sub.unsubscribe(observer1);
sub.fire();