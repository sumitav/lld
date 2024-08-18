import { SortingStrategy } from './sortingStrategy';
import { Player } from './player';

export class LexicographicSortingStrategy implements SortingStrategy {
    sort(players: Player[]): Player[] {
        return players.sort((a, b) => a.name.localeCompare(b.name));
    }
}
