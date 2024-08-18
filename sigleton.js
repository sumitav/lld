let instance=null;
const todos1=[];
class Todos{
  constructor(){
    if(instance!==null){
     return;
    }
    instance=this;
  }
  getInstance(){
    return instance;
  }
  getTodos(){
      return todos1;
  }
  addTodo(todoText){
    todos1.push(todoText);
    console.log(todos1);
  }
}
const todo=new Todos();
Object.freeze(todo)
todo.addTodo('comment');
const todo1=new Todos();
todo1.addTodo('comment');
const todo2=new Todos();
todo2.addTodo('comment');

//singelton instance for everything