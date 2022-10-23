import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialog} from "@angular/material/dialog";
import {DataModalChangeWindow} from "../../../interface/interface";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.css']
})
export class ModalWindowComponent implements OnInit {

  form!: FormGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: DataModalChangeWindow, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.form = new FormGroup({
      title: new FormControl(this.data.task.title, [Validators.required]),
      description: new FormControl(this.data.task.description, [Validators.required]),
      date: new FormControl(this.data.task.date, [Validators.required])
    })
  }

  submit() {
    let {title, description, date} = this.form.value;
    this.data.tasks.forEach(taskElement => {
      if (taskElement.id === this.data.task.id) {
        taskElement.title = title;
        taskElement.description = description;
        taskElement.date = date;
      }
    })
    this.dialog.closeAll();
  }

}
