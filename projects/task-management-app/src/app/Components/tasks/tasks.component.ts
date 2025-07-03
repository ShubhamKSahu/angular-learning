import { Component, Input } from '@angular/core';
import { users } from 'src/app/dummy-user';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
@Input({required : true}) username?: string;
}
