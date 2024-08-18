"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Player = void 0;
class Player {
    constructor(name) {
        this.name = name;
    }
    playGame(game) {
        console.log(`${this.name} is playing ${game.name}...`);
    }
}
exports.Player = Player;
//# sourceMappingURL=player.js.map