import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TaskList} from "../../../interface/interface";
import {TaskServiceService} from "../../services/task-service.service";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: TaskList[] = []

  constructor(private taskService: TaskServiceService) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
  }

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
