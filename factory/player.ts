import { Game } from './game';

export class Player {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    playGame(game: Game): void {
        console.log(`${this.name} is playing ${game.name}...`);
    }
}
