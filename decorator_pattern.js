class Game {
    constructor(name) {
      this.name = name;
      console.log('added game');
    }
  }
  
  class Player {
    constructor(name, score) {
      this.name = name;
      this.score = score;
    }
  }
  
  class Score {
    constructor(value) {
      this.value = value;
    }
  }
  
  // Decorator base class
  class ObjectDecorator {
    constructor(object) {
      this.object = object;
    }
  }
  
  // Decorator for logging
  class LoggingDecorator extends ObjectDecorator {
    display() {
      console.log(`Logging: ${this.object}`);
    }
  }
  
  // Usage
  const game = new Game('My Game');
  const loggedGame = new LoggingDecorator(game);
  loggedGame.display(); // Output: Logging: [object Object]