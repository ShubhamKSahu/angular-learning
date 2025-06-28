import { Component } from '@angular/core';
import { users } from 'src/app/dummy-user';

let randomIndex = Math.floor(Math.random() * users.length);
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  selectedUser = users[randomIndex];

  get imagePath(){
    return 'assets/users/' + this.selectedUser.avatar;
  }

  onSelectUser(){
    console.log("User Clicked!");
  }
}
