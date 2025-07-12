import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { UserInputComponent } from './components/user-input/user-input.component';
import { FormsModule } from '@angular/forms';
import { OutputResultComponent } from './components/output-result/output-result.component';
import { NgFor } from '@angular/common';
import { NgIf } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UserInputComponent,
    OutputResultComponent
  ],
  imports: [
    BrowserModule, FormsModule, NgFor, NgIf
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
