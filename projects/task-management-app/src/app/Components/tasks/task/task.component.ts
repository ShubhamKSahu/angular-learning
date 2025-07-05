import { Component, EventEmitter, Input, Output } from '@angular/core';
import { type Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
@Input({required: true}) tasks!: Task;
@Output() select = new EventEmitter<string>();

onTaskCompleted(){
  this.select.emit(this.tasks.id);
}
}
