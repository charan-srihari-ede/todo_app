import { Component, EventEmitter, Output } from '@angular/core';
import { TodoItem } from 'src/models/todo-item.model';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent {
  taskInputVal='';
@Output() addNewTodoItem= new EventEmitter<TodoItem> //output is used to send data to parent app

  onAddClicked(){
    //check null 
    if(!this.taskInputVal.trim().length){
      return alert('please enter your todo title');
    }
    let todObj:TodoItem={
      id:Date.now(),//return date and time in milli seconds
      title:this.taskInputVal,
      createdAt:new Date(),//returns date
      isCompleted:false,
    };
    this.addNewTodoItem.emit(todObj);
    this.taskInputVal='';
  }
}
