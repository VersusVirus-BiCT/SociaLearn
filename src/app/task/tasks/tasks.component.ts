import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskGroupService} from "../service/task-group.service";

@Component({
  selector: 'sl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  constructor(private route: ActivatedRoute, public readonly taskService: TaskGroupService) {
    this.taskService.loadTaskGroup(parseInt(this.route.snapshot.paramMap.get('id')));
  }

  public ngOnInit(): void {
  }

}
