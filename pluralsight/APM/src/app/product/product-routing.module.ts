import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductGuardService } from './product-guard.service';
import { ProductDetailComponent } from './product-detail/product-detail.component';

const routes : Routes = [
	{ path: 'products', component:ProductListComponent},
	{ path: 'products/:id', canActivate:[ProductGuardService], component:ProductDetailComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: []
})
export class ProductRoutingModule { }
