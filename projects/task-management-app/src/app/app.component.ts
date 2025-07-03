import { Component } from '@angular/core';
import { users } from './dummy-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'task-management-app';
  userList = users;
  selectedId: string = '';

  get selectedUser(){
    return this.userList.find((user)=>{
      return user.id === this.selectedId
    })
  }
  onselectUser(id: string){
    this.selectedId = id;
  }
}

