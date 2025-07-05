import { Component, Input } from '@angular/core';
import { users } from 'src/app/dummy-user';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent {
@Input({required: true}) userId !: string;
@Input({required : true}) username?: string;
tasks = [
  {
    id: 'task-1',
    title: 'Fix login bug',
    summary: 'Resolve the issue causing login failures on Firefox.',
    dueDate: '2025-07-10',
    userId: 'u1'
  },
  {
    id: 'task-2',
    title: 'Design dashboard UI',
    summary: 'Create wireframes and mockups for the analytics dashboard.',
    dueDate: '2025-07-12',
    userId: 'u2'
  },
  {
    id: 'task-3',
    title: 'Update documentation',
    summary: 'Revise API documentation for the latest release.',
    dueDate: '2025-07-08',
    userId: 'u2'
  },
  {
    id: 'task-4',
    title: 'Refactor auth module',
    summary: 'Improve readability and reduce duplication in authentication code.',
    dueDate: '2025-07-15',
    userId: 'u4'
  },
  {
    id: 'task-5',
    title: 'Add unit tests',
    summary: 'Write unit tests for the user service.',
    dueDate: '2025-07-09',
    userId: 'u5'
  },
  {
    id: 'task-5',
    title: 'Add sample tests',
    summary: 'Sample tests for the user service.',
    dueDate: '2025-07-09',
    userId: 'u3'
  }
];

get selectedUsers(){
  return this.tasks.filter((task)=>{
    return task.userId == this.userId;
  })
}

}
