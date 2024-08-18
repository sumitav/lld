//mediator design pattern is a behavioral design pattern that 
//lets you reduce chaotic dependencies between objects.
// The pattern restricts direct communications
// between the objects and forces 
//them to collaborate only via a mediator object.
// The mediator object is a central hub through which all interactions
function Member(name) {
  this.name = name;
  this.chatroom = null;
}
Member.prototype = {
    send: function(message, toMember) {
      this.chatroom.send(message, this, toMember);
    },
    receive: function(message, fromMember) {
      console.log(`${fromMember.name} to ${this.name}: ${message}`);
    }
};
function chatroom(){
    this.members={};
}
chatroom.prototype={
    addMember:function(member){
        this.members[member.name]=member;
        member.chatroom=this;
    },
    send:function(message,fromMember,toMember){
        toMember.receive(message,fromMember);
    }
}

const chat=new chatroom();
const bob=new Member('Bob');
const john=new Member('John');
chat.addMember(bob);
chat.addMember(john);
bob.send('Hello John',john);
john.send('Hello Bob',bob);
// Output
// John to Bob: Hello John
// Bob to John: Hello Bob
// In this example, we have a chatroom as a mediator object.
// The chatroom object has a members property that stores all the members.
// The addMember method adds a new member to the chatroom.
// The send method sends a message from one member to another.
// The Member class represents a member object.
// The send method sends a message to another member.
// The receive method receives a message from another member.
// When Bob sends a message to John, the chatroom object forwards the message from Bob to John.
// When John sends a message to Bob, the chatroom object forwards the message from John to Bob.
// The mediator pattern is useful when you have a set of objects that need to communicate with each other.
// Instead of having direct communication between the objects, you can use a mediator object to handle the communication.
// This reduces the complexity of the interactions between the objects and makes the code easier to maintain.
// The mediator pattern is commonly used in chat applications, multiplayer games, and other scenarios where multiple objects need to communicate with each other.
// The mediator pattern is similar to the observer pattern, but with a key difference: in the observer pattern, the observers are aware of each other, while in the mediator pattern, the objects are not aware of each other and communicate through the mediator object.
// The mediator pattern is also similar to the facade pattern, but with a key difference: in the facade pattern, the facade object provides a simplified interface to a complex system, while in the mediator pattern, the mediator object coordinates the interactions between multiple objects.
// The mediator pattern is a powerful tool for managing complex interactions between objects and can help you build more maintainable and scalable applications.
// The mediator pattern is a behavioral design pattern that lets you reduce chaotic dependencies between objects.
// The pattern restricts direct communications between the objects and forces them to collaborate only via a mediator object.
// The mediator object is a central hub through which all interactions
// The mediator pattern is useful when you have a set of objects that need to communicate with each other.