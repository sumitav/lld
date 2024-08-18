import { Player } from "./player";

export interface SortingStrategy {
    sort(players: Player[]): Player[];
}
