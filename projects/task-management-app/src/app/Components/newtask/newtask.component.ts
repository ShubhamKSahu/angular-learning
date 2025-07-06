import { Component, EventEmitter, Output } from '@angular/core';
import { NewTask } from './newtask.model';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  @Output() create = new EventEmitter<NewTask>();
  newTask: NewTask={
    title : '',
    summary : '',
    dueDate : ''
  };
onCancelClick(){
  this.cancel.emit();
}

onCreateClick(){
  this.create.emit(this.newTask);
}
}
