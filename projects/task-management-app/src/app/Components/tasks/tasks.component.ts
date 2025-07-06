import { Component, Input } from '@angular/core';
import { users } from 'src/app/dummy-user';
import { NewTask } from '../newtask/newtask.model';
import { TasksService } from './tasks.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
  @Input({ required: true }) userId !: string;
  @Input({ required: true }) username?: string;
  isNewTaskClicked = false;

  constructor(private taskService: TasksService) { }

  get selectedUsers() {
    return this.taskService.getUserTasks(this.userId)
  }
  taskCompleted(userId: string) {
    this.taskService.taskCompleted(userId);
  }

  addNewTask() {
    this.isNewTaskClicked = true;
  }
  onCancelNewTask() {
    this.isNewTaskClicked = false;
  }
  createNewTask(newtask: NewTask) {
    this.taskService.addNewTasks(newtask, this.userId)
    this.isNewTaskClicked = false;
  }
}
