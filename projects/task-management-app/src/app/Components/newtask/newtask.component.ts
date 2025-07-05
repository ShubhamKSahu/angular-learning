import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-newtask',
  templateUrl: './newtask.component.html',
  styleUrls: ['./newtask.component.css']
})
export class NewtaskComponent {
  @Output() cancel = new EventEmitter<void>();
onCancelClick(){
  this.cancel.emit();
}
}
