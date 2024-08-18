//builder design pattern is a creational design pattern 
//that lets you construct complex objects step by step.

function Person(name,age){
    this.name=name;
    this.age=age;
}
function PersonBuilder(){
    this.person=new Person();
    this.setName=function(name){
        this.person.name=name;
        return this;
    }
    this.setAge=function(age){
        this.person.age=age;
        return this;
    }
    this.build=function(){
        return this.person;
    }
}
const person=new PersonBuilder()
.setName('John')
.setAge(30)
.build();
console.log(person);