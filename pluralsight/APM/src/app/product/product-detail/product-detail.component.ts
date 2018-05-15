import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { ProductService } from '../product.service';
import { IProduct } from '../product';

@Component({
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  title : string = 'Product Detail';
  product : IProduct;

  constructor( private _productService : ProductService,
    private _activatedRoute : ActivatedRoute,
    private _router : Router,
    private _location : Location) { }
  
  ngOnInit() {
    let id = +this._activatedRoute.snapshot.paramMap.get('id');
    this._productService.getProductById(id)
      .subscribe(productForId=>this.product = productForId);
    this.title += ` :${id}`;
  }

  onBack() : void {
    this._location.back();
    //this._router.navigate(['/products']);    
  }
}
