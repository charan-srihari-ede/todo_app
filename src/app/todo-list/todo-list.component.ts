import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
@Input() todoListItems:TodoItem[]=[];
@Output() markAsDone=new EventEmitter<TodoItem>();
onCheckboxChanged(todoItem: TodoItem){
  todoItem.isCompleted=true;
  todoItem.completedAt=new Date();
  this.markAsDone.emit(todoItem);
}
}
