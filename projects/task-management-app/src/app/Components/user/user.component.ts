import { Component, Input, Output, EventEmitter} from '@angular/core';
import { users } from 'src/app/dummy-user';


// type User = {
//   id: string;
//   avatar: string;
//   name : string
// }

interface User {
  id: string;
  avatar: string;
  name : string
}
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({required: true}) user !: User;
  @Output() select = new EventEmitter();
  //select = output<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
