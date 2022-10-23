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
  dateNow = new Date().toLocaleDateString()
  tasks: TaskList[] = [];

  constructor(private taskService: TaskServiceService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => this.tasks = tasks)
    console.log(this.dateNow)
    console.log(this.tasks[0].date.split("").reverse().join("").replace(/-/gi, '.').split('.'))
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

  dateComparison(dateNow: string, dateTask: string, term?: string): boolean {
    let dateTaskArray = dateTask.split("").join("").split('-').reverse();
    let dateNowArray = dateNow.split('.');
    let result: boolean = false;
    if (term === "threeDay" && dateTaskArray[2] === dateNowArray[2] && dateTaskArray[1] === dateNowArray[1]) {
      if (
        dateNowArray[0] === "31" && dateTaskArray[0] === "2" && +dateNowArray[1] < +dateTaskArray[1] ||
        dateNowArray[0] === "30" && dateTaskArray[0] === "2" && +dateNowArray[1] < +dateTaskArray[1] ||
        dateNowArray[0] === "30" && dateTaskArray[0] === "1" && +dateNowArray[1] < +dateTaskArray[1] ||
        dateNowArray[0] === "29" && dateTaskArray[0] === "1" && +dateNowArray[1] < +dateTaskArray[1] ||
        dateNowArray[0] === "29" && dateTaskArray[0] === "2" && +dateNowArray[1] < +dateTaskArray[1] ||
        dateNowArray[0] === "28" && dateTaskArray[0] === "1" && +dateNowArray[1] < +dateTaskArray[1] ||
                                                          +dateNowArray[0] === +dateTaskArray[0] + 2 ||
                                                          +dateNowArray[0] === +dateTaskArray[0] + 1
      )
      {
        result = true
      }
    } else if (dateTaskArray[2] === dateNowArray[2] && dateTaskArray[1] === dateNowArray[1] &&
                                                  +dateTaskArray[0] <= +dateNowArray[0] - 3 ||
      dateTaskArray[2] === dateNowArray[2] && dateTaskArray[1] === dateNowArray[1] &&
                                                  dateTaskArray[0] === dateNowArray[0]
    ) {
      result = true
    }
    return result
  }

}
