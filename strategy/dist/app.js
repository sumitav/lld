"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const leaderboard_1 = require("./leaderboard");
const lexigoSorting_1 = require("./lexigoSorting");
const absoluteSort_1 = require("./absoluteSort");
const players = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 80 },
    { name: 'Charlie', score: 100 },
    { name: 'Dave', score: 90 },
    { name: 'Eve', score: 80 },
];
const leaderboard = new leaderboard_1.Leaderboard(new lexigoSorting_1.LexicographicSortingStrategy());
const sortedPlayers = leaderboard.sort(players.slice(0, 5));
console.log('Lexicographic Sorting:', sortedPlayers);
const leaderboard1 = new leaderboard_1.Leaderboard(new absoluteSort_1.AbsoluteSortingStrategy());
const sortedPlayers1 = leaderboard1.sort(players);
console.log('Absolute Sorting:', sortedPlayers1);
//# sourceMappingURL=app.js.map