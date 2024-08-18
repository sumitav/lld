"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteSubject = void 0;
class ConcreteSubject {
    constructor() {
        this.observers = [];
        this.score = 0;
    }
    registerObserver(observer) {
        this.observers.push(observer);
    }
    removeObserver(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    notifyObservers(score) {
        this.observers.forEach(observer => observer.update(score));
    }
    setScore(score) {
        this.score = score;
        this.notifyObservers(score);
    }
}
exports.ConcreteSubject = ConcreteSubject;
//# sourceMappingURL=concreteSub.js.map