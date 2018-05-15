import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  MatButtonModule,
  MatCardModule,
  MatToolbarModule,
  MatInputModule,
  MatFormFieldModule,
  MatListModule
} from '@angular/material';

const MAT_MODULES = [
    MatButtonModule,
    MatCardModule,
    MatToolbarModule,
    MatInputModule,
    MatFormFieldModule,
    MatListModule
];

@NgModule({
  imports: [
    CommonModule,
    MAT_MODULES
  ],
  declarations: [],
  exports: [MAT_MODULES]
})
export class AngularMaterialModule { }
