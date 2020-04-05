import {Component, OnInit} from '@angular/core';
import {TaskGroupService} from '../service/task-group.service';
import {TaskTypeService} from '../service/task-type.service';
import {TaskGroup} from '../model/task-group';
import {TaskType} from '../model/task-type';
import {Task} from '../model/task';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'sl-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  public taskGroupId: number;
  public taskGroup: TaskGroup;
  public taskTypes: TaskType[];
  public lastTaskId : number;

  constructor(private route: ActivatedRoute, private taskGroupService: TaskGroupService, taskTypeService: TaskTypeService) {
    this.taskGroupId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    taskGroupService.loadTaskGroups();
    taskTypeService.loadTaskTypes();
    taskGroupService.taskGroups$.subscribe((taskGroups : TaskGroup[]) => {
      this.taskGroup = taskGroups.find(tt => tt.id === this.taskGroupId);
      if(this.taskGroup)
      this.lastTaskId = this.taskGroup.tasks.length;
    });
    taskTypeService.taskTypes$.subscribe((taskTypes: TaskType[]) => {
      this.taskTypes = taskTypes;
    })
  }

  public ngOnInit(): void {
  }

  public taskTypeChange(taskTypeId: number, task: Task): void {
    const newType = this.taskTypes.find(tt => tt.id === taskTypeId);
    if(task.type.solutionType === 'text' || newType.solutionType === 'text') {
      task.solution = null;
    }
    task.type = newType;
  }

  public addSolution(task: Task): void{
    task.solution = (typeof(task.solution) !== 'object' || task.solution === null) ? [] : task.solution;
    task.solution.push({})
  }

  public removeSolution(task: Task, solution: object): void {
    task.solution = task.solution.filter((sol:any) => sol !== solution);
  }

  public removeTask(task: Task): void {
    this.taskGroup.tasks = this.taskGroup.tasks.filter(t => task.id !== t.id);
  }

  public addTask(taskGroup: TaskGroup): void {
    this.lastTaskId++;
    taskGroup.tasks.push({
      id: this.lastTaskId,
      name: 'Test',
      description: 'Test',
      points: 0,
      question: null,
      solution: null,
      type: this.taskTypes[0]
    });
  }

  public storeTaskGroup(taskGroup: TaskGroup): void{
    console.log(taskGroup);
    this.taskGroupService.storeTaskGroup(taskGroup);
  }
}

