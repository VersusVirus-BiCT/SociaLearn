import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QaComponent } from './qa.component';
import { TranslationModule } from '../core/translation/translation.module';
import { MaterialModule } from '../core/material/material.module';
import { ProfileIconDirective } from './profile-icon-directive/profile-icon.directive';

@NgModule({
  declarations: [QaComponent, ProfileIconDirective],
  imports: [
    CommonModule,
    TranslationModule,
    MaterialModule
  ],
  exports: [
    QaComponent
  ]
})
export class QaModule { }
