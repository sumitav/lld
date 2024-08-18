"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LexicographicSortingStrategy = void 0;
class LexicographicSortingStrategy {
    sort(players) {
        return players.sort((a, b) => a.name.localeCompare(b.name));
    }
}
exports.LexicographicSortingStrategy = LexicographicSortingStrategy;
//# sourceMappingURL=lexigoSorting.js.map