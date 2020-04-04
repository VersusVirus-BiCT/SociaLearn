import {Component, Input, OnInit} from '@angular/core';
import {TaskGroupService} from '../service/task-group.service';

@Component({
  selector: 'sl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  @Input() public taskGroupId = 1;
  @Input() public user = {role: 'school'};

  constructor(public readonly taskGroupService: TaskGroupService) {
    this.taskGroupService.loadTaskGroup(this.taskGroupId);
  }

  public ngOnInit(): void {

  }
}
