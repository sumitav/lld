class Todos{
    todos=[];
    constructor(){

    }
    getTodos(){
        return this.todos;
    }
    addTodo(todoText){
        this.todos.push(todoText);
        console.log(this.todos);
    }
}
const todo=new Todos();
todo.addTodo('comment');
const todo1=new Todos();
todo1.addTodo('comment');
todo.addTodo('comment');
const todo2=new Todos();
todo2.addTodo('comment');

//separate instances for everything
//like student s1,s2 in a class