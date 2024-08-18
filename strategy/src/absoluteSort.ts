import { SortingStrategy } from './sortingStrategy';
import { Player } from './player';

export class AbsoluteSortingStrategy implements SortingStrategy {
    sort(players: Player[]): Player[] {
        return players.sort((a, b) => b.score - a.score);
    }
}
