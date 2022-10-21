import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TaskList} from "../../../interface/interface";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  tasks: TaskList[] = [
    {
      id: 1/*Date.now()*/,
      title: "task1",
      description: "learn ng",
      date: "2022-10-12",
      open: false
    },
    {
      id: 2/*Date.now()*/,
      title: "task2",
      description: "learn ts",
      date: "2022-10-12",
      open: false
    },
    {
      id: 3/*Date.now()*/,
      title: "task3",
      description: "learn ngrx",
      date: "2022-10-12",
      open: false
    },
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

  closeTask(idTask: number) {
    this.tasks = this.tasks.filter(el => el.id !== idTask);
  }

  openDescription(idTask: number) {
    this.tasks.find(task => task.id === idTask)!.open = !this.tasks.find(task => task.id === idTask)!.open
  }

}
