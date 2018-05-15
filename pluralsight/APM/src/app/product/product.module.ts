import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { ProductGuardService } from './product-guard.service';
import { ProductRoutingModule } from './product-routing.module';

@NgModule({
  imports: [
    SharedModule,
    HttpClientModule,
    ProductRoutingModule
  ],
  declarations: [ProductDetailComponent, ProductListComponent],
  providers :[ProductService, ProductGuardService]
})
export class ProductModule { }
