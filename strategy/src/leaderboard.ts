import { SortingStrategy } from './sortingStrategy';
import { Player } from './player';

export class Leaderboard {
    private strategy: SortingStrategy;

    constructor(strategy: SortingStrategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy: SortingStrategy): void {
        this.strategy = strategy;
    }

    sort(players: Player[]): Player[] {
        return this.strategy.sort(players);
    }
}
