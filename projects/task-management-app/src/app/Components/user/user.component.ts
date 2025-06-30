import { Component, Input, Output, EventEmitter} from '@angular/core';
import { users } from 'src/app/dummy-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input() id!:string;
  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  @Output() select = new EventEmitter();
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
    this.select.emit(this.id);
  }
}
