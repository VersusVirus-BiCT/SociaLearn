import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskboardComponent } from './taskboard/taskboard.component';
import {EntryComponent} from './entry/entry.component';


const routes: Routes = [
  {
    path: 'board',
    component: TaskboardComponent
  },
  {
    path: 'entry',
    component: EntryComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TaskRoutingModule { }
