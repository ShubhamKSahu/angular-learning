import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TaskComponent } from './Components/tasks/task/task.component';
import { NewtaskComponent } from './Components/newtask/newtask.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, UserComponent, TasksComponent, TaskComponent, NewtaskComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
