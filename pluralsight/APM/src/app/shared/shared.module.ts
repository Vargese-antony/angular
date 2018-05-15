//Angular modules/components
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
//App components
import { StarComponent } from './star/star.component';
import { ConvertToSpacesPipe } from './convert-to-spaces.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports : [FormsModule, CommonModule, RouterModule, StarComponent, ConvertToSpacesPipe],
  declarations: [StarComponent, ConvertToSpacesPipe]
})
export class SharedModule { }
