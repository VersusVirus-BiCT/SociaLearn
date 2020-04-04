import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { EntryComponent } from './entry/entry.component';
import {MatCardModule} from "@angular/material/card";
import { QaModule } from '../qa/qa.module';


@NgModule({
  declarations: [TaskboardComponent, EntryComponent],
  imports: [
    CommonModule,
    TaskRoutingModule,
    QaModule,
    MatCardModule
  ]
})
export class TaskModule { }
