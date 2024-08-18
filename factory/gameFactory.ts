import { Game } from './game'
import { Leaderboard } from './leaderboard';
import { Player } from './player';

export class GameFactory {
    createGame(name: string): Game {
        return new Game(name);
    }

    createLeaderboard(): Leaderboard {
        return new Leaderboard();
    }

    createPlayer(name: string): Player {
        return new Player(name);
    }
}
