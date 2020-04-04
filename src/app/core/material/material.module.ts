import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

const Material = [
  MatButtonModule
]

@NgModule({
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
