import {Component, Input, OnInit} from '@angular/core';
import {TaskGroup} from '../model/task-group';
import {TaskGroupService} from '../service/task-group.service';

@Component({
  selector: 'sl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() public taskGroupId = 1;
  @Input() public user = {role: 'school'};
  public taskGroup: TaskGroup;

  constructor(private taskGroupService: TaskGroupService) {
    this.taskGroupService.getTaskGroup(this.taskGroupId).subscribe((taskgroup: TaskGroup) => this.taskGroup = taskgroup);
  }

  public ngOnInit(): void {

  }
}
