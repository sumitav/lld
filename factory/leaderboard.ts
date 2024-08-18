import { Player } from './player';

export class Leaderboard {
    players: Player[];

    constructor() {
        this.players = [];
    }

    addPlayer(player: Player): void {
        this.players.push(player);
    }

    showLeaderboard(): void {
        console.log("Leaderboard:");
        this.players.forEach((player, index) => {
            console.log(`${index + 1}. ${player.name}`);
        });
    }
}
