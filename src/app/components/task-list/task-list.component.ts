import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import { TaskList } from "../../../interface/interface";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  tasks: TaskList[] = [
    {id: Date.now() ,title: "task1", description: "learn ng", date:"2022-10-12"},
    {id: Date.now() ,title: "task2", description: "learn ts", date:"2022-10-12"},
    {id: Date.now() ,title: "task3", description: "learn ngrx", date:"2022-10-12"},
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.tasks, event.previousIndex, event.currentIndex);
  }

}
