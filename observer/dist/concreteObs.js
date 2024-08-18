"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConcreteObserver = void 0;
class ConcreteObserver {
    constructor(k) {
        this.scoresQueue = [];
        this.scoresMap = new Map();
        this.k = k;
    }
    update(score) {
        this.addToQueue(score);
    }
    addToQueue(score) {
        this.scoresQueue.push(score);
        this.updateScoresMap();
    }
    updateScoresMap() {
        while (this.scoresQueue.length > 0) {
            const score = this.scoresQueue.shift();
            if (score !== undefined) {
                this.scoresMap.set(score, (this.scoresMap.get(score) || 0) + 1);
            }
        }
        this.sortScoresMap();
    }
    sortScoresMap() {
        const sortedScores = Array.from(this.scoresMap.keys()).sort((a, b) => b - a);
        this.scoresMap = new Map();
        for (let i = 0; i < this.k && i < sortedScores.length; i++) {
            const score = sortedScores[i];
            const count = this.scoresMap.get(score) || 0;
            this.scoresMap.set(score, count + 1);
        }
    }
    getTopScores() {
        return this.scoresMap;
    }
}
exports.ConcreteObserver = ConcreteObserver;
//# sourceMappingURL=concreteObs.js.map