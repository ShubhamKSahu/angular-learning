import { Component, Input } from '@angular/core';
import { users } from 'src/app/dummy-user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input({required: true}) avatar!:string;
  @Input({required: true}) name!:string;
  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){
  }
}
