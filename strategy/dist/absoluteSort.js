"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbsoluteSortingStrategy = void 0;
class AbsoluteSortingStrategy {
    sort(players) {
        return players.sort((a, b) => b.score - a.score);
    }
}
exports.AbsoluteSortingStrategy = AbsoluteSortingStrategy;
//# sourceMappingURL=absoluteSort.js.map