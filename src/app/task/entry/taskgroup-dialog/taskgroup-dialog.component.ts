import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {TaskGroup} from '../../model/task-group';

class DialogComponent {
}

@Component({
  selector: 'sl-taskgroup-dialog',
  templateUrl: './taskgroup-dialog.component.html',
  styleUrls: ['./taskgroup-dialog.component.scss']
})
export class TaskgroupDialogComponent implements OnInit {

  @Output() public submitClicked = new EventEmitter<any>();
  public taskGroup :TaskGroup;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>) {
    this.taskGroup = data.taskGroup;
  }

  public ngOnInit(): void {
  }

}
