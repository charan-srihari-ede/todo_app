import { Component, EventEmitter, Input, Output } from '@angular/core';
import { doneListItems } from 'src/mock-data/done-list.mock';
import { DoneItem } from 'src/models/done-item.model';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-done-list',
  templateUrl: './done-list.component.html',
  styleUrls: ['./done-list.component.css']
})
export class DoneListComponent {
@Input() doneListItems:TodoItem[]=[];
@Output() markAsUndone = new EventEmitter<TodoItem>();
onCheckboxChanged(todoItem: TodoItem) {
  todoItem.isCompleted = false;
  todoItem.createdAt = new Date();
  this.markAsUndone.emit(todoItem);
}
}
