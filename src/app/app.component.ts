import { Component } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo';
  todoList: TodoItem[]=[];
  doneList:TodoItem[]=[];
 addNewTodo(item:TodoItem){
  this.todoList.push(item);
 }
 markAsDone(todo: TodoItem) {
  // check for existance
  const todoIndex = this.todoList.findIndex((item) => item.id === todo.id);
  if (todoIndex < 0) {
    return alert('Invalid todo item');
  }

  // remove from todo list
  this.todoList.splice(todoIndex, 1);

  // add to done list
  this.doneList.push(todo);
}
markAsUndone(todo:TodoItem){
  const todoIndex=this.doneList.findIndex((item)=>item.id === todo.id);
  if(todoIndex<0){
    return alert('Invalid todo Item');
  }
  this.doneList.splice(todoIndex,1);
  this.todoList.push(todo);
}
}
