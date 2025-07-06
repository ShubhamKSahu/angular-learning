import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { TasksComponent } from './Components/tasks/tasks.component';
import { TaskComponent } from './Components/tasks/task/task.component';
import { NewtaskComponent } from './Components/newtask/newtask.component';
import { FormsModule } from '@angular/forms';
import { CardComponent } from './shared/card/card.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, UserComponent, TasksComponent, TaskComponent, NewtaskComponent, CardComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
