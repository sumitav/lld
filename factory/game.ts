export class Game {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    play(): void {
        console.log(`Playing ${this.name} game...`);
    }
}
