import {Component, OnInit} from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {TaskList} from "../../../interface/interface";
import {TaskServiceService} from "../../services/task-service.service";
import {MatDialog} from "@angular/material/dialog";
import {ModalWindowComponent} from "../modal-window/modal-window.component";


@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: TaskList[] = [];

  constructor(private taskService: TaskServiceService, public dialog: MatDialog) {
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

  openDialog(task: TaskList) {
    this.dialog.open(ModalWindowComponent, {
      width: '250px',
      data: {task, tasks: this.tasks}
    });
  }

}
