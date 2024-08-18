//creational pattern->
// that provides an interface for 
//creating objects, but   lets subclasses decide which class to instantiate.
class Game {
    constructor(id,name) {
    this.id=id;
      this.name = name;
      console.log('game obj created');
    }
  }
  
  class Player {
    constructor(id,name) {
      this.id = id;
      this.name = name;
      console.log('plater obj created');
    }
    }
    
    // ... other player methods
  
  class Score {
    constructor(pid,value) {
      this.value = value;
      this.pid=pid;
      console.log('score obj created');
    }
    }
    // ... other score methods
  
  class Factory {
    createGame(id,name) {
      return new Game(id,name);
    }
  
    createPlayer(id, name) {
      return new Player(id, name);
    }
  
    createScore(pid,value) {
      return new Score(pid,value);
    }
  }
  
  // Usage:
  const factory = new Factory();
  const game = factory.createGame(1,'My Game');
  const player = factory.createPlayer(1,'John Doe');
  const score = factory.createScore(1,50);




  //me kya karunga ki me directly object classes la create nh karunga me ek fatcory class banaunga
  //directly will create object of different class
  //factory=new Factory();
  //game=factory.createGame(1,"myhame")
  //mereko directly access nh mila but mene object factory class ke hisab se sab bana dia
  