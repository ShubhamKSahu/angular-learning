import { Component } from '@angular/core';
import { users } from './dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'task-management-app';
  userList = users;
  onselectUser(id: string){
    console.log("User id selected is: ", id);
  }
}
