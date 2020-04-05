import { Component, OnInit } from '@angular/core';
import { TaskGroupService } from '../service/task-group.service';
import { TaskTypeService } from '../service/task-type.service';
import { TaskGroup } from '../model/task-group';
import { TaskType } from '../model/task-type';
import { Task } from '../model/task';
import {ActivatedRoute, Router} from '@angular/router';
import { TaskDialogComponent } from './task-dialog/task-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {TaskgroupDialogComponent} from './taskgroup-dialog/taskgroup-dialog.component';

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
  public taskGroupList: TaskGroup[];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskGroupService: TaskGroupService,
    taskTypeService: TaskTypeService,
    public dialog: MatDialog
  ) {
    this.taskGroupId = parseInt(this.route.snapshot.paramMap.get('id'), 10);
    taskGroupService.loadTaskGroups();
    taskTypeService.loadTaskTypes();
    if(this.taskGroupId) {
      taskGroupService.taskGroups$.subscribe((taskGroups: TaskGroup[]) => {
        this.taskGroup = taskGroups.find(tt => tt.id === this.taskGroupId);
      });
      taskTypeService.taskTypes$.subscribe((taskTypes: TaskType[]) => {
        this.taskTypes = taskTypes;
      });
    } else {
      taskGroupService.taskGroups$.subscribe((taskGroups: TaskGroup[]) => {
        this.taskGroupList = taskGroups;
        this.taskGroup = {
          id: this.getNextId(this.taskGroupList),
          purpose: '',
          tasks: [],
          title: ''
        }
      });

    }
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
    task.solution.push({id: this.getNextId(task.solution), correct: true})
  }

  public removeSolution(task: Task, solution: object): void {
    task.solution = task.solution.filter((sol:any) => sol !== solution);
  }

  public removeTask(task: Task): void {
    this.taskGroup.tasks = this.taskGroup.tasks.filter(t => task.id !== t.id);
  }

  public addTask(taskGroup: TaskGroup): void {
    this.lastTaskId++;
    const newTask: Task = {
      id: this.getNextId(this.taskGroup.tasks),
      name: '',
      description: '',
      points: 0,
      question: null,
      solution: null,
      type: this.taskTypes[0]
    };
    const dialogRef = this.dialog.open(TaskDialogComponent, {data:{task: newTask, type: 'add'}});
    const dialogFieldSubscription = dialogRef.afterClosed().subscribe((result: Task) => {
      if(result) {
        taskGroup.tasks.push(result);
      }
      dialogFieldSubscription.unsubscribe();
    });
  }

  public editTask(task: Task): void {
    this.dialog.open(TaskDialogComponent, {data:{task: task, type: 'edit'}});
  }

  public setSolutionCorrectness(selected: any, solution: any): void {
    solution.correct = selected === 'true';
  }

  public addGroup(): void {
    this.taskGroupService.createTaskGroup(this.taskGroup);
    this.router.navigate(['/task/entry/' + this.taskGroup.id])
  }

  public editGroup(): void {
    this.dialog.open(TaskgroupDialogComponent, {data:{taskGroup: this.taskGroup}});
  }

  public deleteGroup(): void {
    this.taskGroupService.deleteTaskGroup(this.taskGroup);
    this.router.navigate(['/task/taskboard']);
  }

  private getNextId(object: any[]): number {
    const allIds = object.map(o => o.id);
    allIds.sort((t, s) => (t < s) ? 1 : -1);
    if(allIds.length) {
      return allIds[0] + 1;
    }
    return 1;
  }

  public storeTaskGroup(): void{
    this.taskGroupService.storeTaskGroup(this.taskGroup);
  }
}

