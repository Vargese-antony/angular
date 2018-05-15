import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';


@Component({
  selector: 'pm-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = false;
  _listFilter : string;
  filteredProducts: IProduct[];
  products: IProduct[] = [];
  errorMessage: string;

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter( value: string){
    this._listFilter = value;
    this.filteredProducts = (this.listFilter)?this.performFilter(this.listFilter):this.products;
  }
  constructor(private _productService: ProductService) { 
  }

  ngOnInit() {
    this._productService.getProducts()
      .subscribe(
        products => {
          this.products = products;
          this.filteredProducts = this.products;
        }, 
        error=>this.errorMessage = <any>error
      );
    this.filteredProducts = this.products;
    console.log('End ProductListComponent::ngOnInit');
  }

  toggleImage() : void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter(product => product.name.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }

  onStarClicked(message : string): void {
    this.productList = 'Product List: ' + message; 
  }
}
