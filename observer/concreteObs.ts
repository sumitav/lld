import { Observer } from './observer';

export class ConcreteObserver implements Observer {
    private scoresQueue: number[] = [];
    private scoresMap: Map<number, number> = new Map();
    private k: number;

    constructor(k: number) {
        this.k = k;
    }

    public update(score: number): void {
        this.addToQueue(score);
    }

    private addToQueue(score: number): void {
        this.scoresQueue.push(score);
        this.updateScoresMap();
    }

    private updateScoresMap(): void {
        while (this.scoresQueue.length > 0) {
            const score = this.scoresQueue.shift();
            if (score !== undefined) {
                this.scoresMap.set(score, (this.scoresMap.get(score) || 0) + 1);
            }
        }
        this.sortScoresMap();
    }

    private sortScoresMap(): void {
        const sortedScores = Array.from(this.scoresMap.keys()).sort((a, b) => b - a);
        this.scoresMap = new Map();
        for (let i = 0; i < this.k && i < sortedScores.length; i++) {
            const score = sortedScores[i];
            const count = this.scoresMap.get(score) || 0;
            this.scoresMap.set(score, count + 1);
        }
    }

    public getTopScores(): Map<number, number> {
        return this.scoresMap;
    }
}
