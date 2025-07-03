import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './Components/header/header.component';
import { UserComponent } from './Components/user/user.component';
import { TasksComponent } from './Components/tasks/tasks.component';

@NgModule({
  declarations: [
    AppComponent, HeaderComponent, UserComponent, TasksComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
