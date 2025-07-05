import { Component, Input } from '@angular/core';

interface Task{
  id: string;
  title: string;
  summary: string;
  dueDate: string;
  userId: string;
}
@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {
@Input({required: true}) tasks!: Task;

}
