import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { MaterialModule } from 'src/app/core/modules/material/material.module';
import { TranslationModule } from 'src/app/core/modules/translation/translation.module';


@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    MaterialModule,
    TranslationModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
