import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskRoutingModule } from './task-routing.module';
import { TaskboardComponent } from './taskboard/taskboard.component';
import { EntryComponent } from './entry/entry.component';
import { TasksComponent } from './tasks/tasks.component';
import {TranslateModule} from '@ngx-translate/core';
import {MaterialModule} from '../core/material/material.module';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatListModule} from '@angular/material/list';


@NgModule({
  declarations: [
    TaskboardComponent,
    EntryComponent,
    TasksComponent,
  ],
  imports: [
    CommonModule,
    TaskRoutingModule,
    MaterialModule,
    TranslateModule,
    MatCardModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatListModule
  ]
})
export class TaskModule { }
