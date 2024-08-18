"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const concreteSub_1 = require("./concreteSub");
const concreteObs_1 = require("./concreteObs");
// Create a subject
const subject = new concreteSub_1.ConcreteSubject();
// Create observers
const observer1 = new concreteObs_1.ConcreteObserver(3); // top 3 scores
const observer2 = new concreteObs_1.ConcreteObserver(5); // top 5 scores
// Register observers
subject.registerObserver(observer1);
subject.registerObserver(observer2);
// Update scores
subject.setScore(100);
subject.setScore(200);
subject.setScore(50);
subject.setScore(300);
subject.setScore(150);
// Get top scores from each observer
console.log('Top 3 Scores:', observer1.getTopScores());
console.log('Top 5 Scores:', observer2.getTopScores());
//# sourceMappingURL=app.js.map