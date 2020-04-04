import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { EntryComponent } from './entry/entry.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import { TasksComponent } from './tasks/tasks.component';
import {TranslateModule} from "@ngx-translate/core";


@NgModule({
  declarations: [TaskboardComponent, EntryComponent, TasksComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MatCardModule,
    MatIconModule,
    TranslateModule
  ]
})
export class TaskModule { }
