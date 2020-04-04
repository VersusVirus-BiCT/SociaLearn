import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TaskGroupService} from "../service/task-group.service";
import {SolutionOption} from "../model/solution-option";
import {Task} from "../model/task";

@Component({
  selector: 'sl-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent implements OnInit {

  public answer: any[];
  public correct: any[];

  constructor(private route: ActivatedRoute, public readonly taskService: TaskGroupService) {
    this.taskService.loadTaskGroup(parseInt(this.route.snapshot.paramMap.get('id')));
    this.taskService.taskGroups$.subscribe(o => {
        this.answer = new Array(o.length);
        this.correct = new Array(o.length);
    });
  }

  public castSolutionOption(element: any): SolutionOption[]{
    return element;
  }

  public checkAnswer(task: Task, index: number): void{
    console.log(task);
    console.log(this.answer[index]);
    //this.answer[index] = (Array.isArray(this.answer[index]))?this.answer[index]:[this.answer[index]];
    let arr = (Array.isArray(this.answer[index]))?this.answer[index]:[this.answer[index]];
    this.correct[index] = false;
    if(task.type.solutionType == 'text' && task.solution == this.answer[index])
      this.correct[index] = true;
    else {
      let solution: number = 0;
      let solved: number = 0;
      task.solution.filter((e:SolutionOption) => {solution = solution + ((e.correct)?1:0);});
      for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < task.solution.length; j++){
          if(arr[i] == task.solution[j].id && task.solution[j].correct){
            solved++;
          }else if(!task.solution[j].correct && (arr[i] == task.solution[j].id)){
            solved--;
          }
        }
      }
      if(solved == solution)
        this.correct[index] = true;
    }

  }

  public setAnswer(value:string, index:number){
    this.answer[index] = value;
  }

  public ngOnInit(): void {
  }

}
