import { Subject } from './subject';
import { Observer } from './observer';

export class ConcreteSubject implements Subject {
    private observers: Observer[] = [];
    private score: number = 0;

    public registerObserver(observer: Observer): void {
        this.observers.push(observer);
    }

    public removeObserver(observer: Observer): void {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }

    public notifyObservers(score: number): void {
        this.observers.forEach(observer => observer.update(score));
    }

    public setScore(score: number): void {
        this.score = score;
        this.notifyObservers(score);
    }
}
