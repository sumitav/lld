import { Player } from './player';
import { Leaderboard } from './leaderboard';
import { LexicographicSortingStrategy } from './lexigoSorting';
import { AbsoluteSortingStrategy } from './absoluteSort';

const players: Player[] = [
    { name: 'Alice', score: 100 },
    { name: 'Bob', score: 80 },
    { name: 'Charlie', score: 100 },
    { name: 'Dave', score: 90 },
    { name: 'Eve', score: 80 },
];

const leaderboard = new Leaderboard(new LexicographicSortingStrategy());
const sortedPlayers = leaderboard.sort(players.slice(0, 5));
console.log('Lexicographic Sorting:', sortedPlayers);

const leaderboard1 = new Leaderboard(new AbsoluteSortingStrategy());
const sortedPlayers1 = leaderboard1.sort(players);
console.log('Absolute Sorting:', sortedPlayers1);
