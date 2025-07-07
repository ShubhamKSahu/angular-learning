import { Injectable } from "@angular/core";
import { NewTask } from "../newtask/newtask.model";
@Injectable({
    providedIn: 'root'
})
export class TasksService {
    private tasks = [
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

    constructor(){
        const tasks = localStorage.getItem('tasks');
        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }
    getUserTasks(id: string) {
        return this.tasks.filter((task) => {
            return task.userId == id;
        })
    }
    addNewTasks(newtask: NewTask, userId: string) {
        this.tasks.push({
            id: new Date().getTime().toString(),
            title: newtask.title,
            summary: newtask.summary,
            dueDate: newtask.dueDate,
            userId: userId
        })
        this.onSaveTask();
    }

    taskCompleted(id: string) {
        this.tasks = this.tasks.filter((task) => {
            return task.id !== id;
        })
        this.onSaveTask();
    }

    onSaveTask(){
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }
}


