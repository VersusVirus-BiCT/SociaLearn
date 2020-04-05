import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import { Task } from '../../model/task';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';


class DialogComponent {
}

@Component({
  selector: 'sl-task-dialog',
  templateUrl: './task-dialog.component.html',
  styleUrls: ['./task-dialog.component.scss']
})
export class TaskDialogComponent implements OnInit {

  @Output() public submitClicked = new EventEmitter<any>();
  public task: Task;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {
    this.task = data.task;
  }

  public ngOnInit(): void {
  }
}
