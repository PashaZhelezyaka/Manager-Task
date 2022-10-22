import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {tasksStore} from "../../tasksStore";
import {SubmitTask, TaskList} from "../../interface/interface";

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  tasks$ = of(tasksStore);

  constructor() {
  }

  getTasks(): Observable<TaskList[]> {
    return this.tasks$;
  }

  addedTask(submitTask: SubmitTask) {
    const newTask: TaskList = {
      id: Date.now(),
      title: submitTask.title,
      description: submitTask.description,
      date: submitTask.date,
      open: false
    }
    return this.tasks$.subscribe(tasks => tasks.push(newTask))
  }

}
