import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskboardComponent } from './taskboard/taskboard.component';
import {EntryComponent} from './entry/entry.component';
import {TasksComponent} from './tasks/tasks.component';


const routes: Routes = [
  {
    path: 'board',
    component: TaskboardComponent
  },
  {
    path: 'entry/:id',
    component: EntryComponent,
  },
  {
    path: 'tasks/:id',
    component: TasksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
