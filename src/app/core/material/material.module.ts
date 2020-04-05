import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

const Material = [
  MatButtonModule,
  MatExpansionModule,
  MatSnackBarModule,
  MatTableModule,
  MatCardModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatIconModule,
]

@NgModule({
  imports: [Material],
  exports: [Material],
  providers: []
})
export class MaterialModule { }
