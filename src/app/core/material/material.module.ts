import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';

const Material = [
  MatButtonModule,
  MatSnackBarModule
]

@NgModule({
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
