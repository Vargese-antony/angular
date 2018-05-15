import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable'; //Reactive extensions
import { HttpErrorResponse } from "@angular/common/http";
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/find';
import 'rxjs/add/operator/map';

import { IProduct } from "./product";


@Injectable()
export class ProductService {
	
	private _url = './api/products/products.json';

	constructor(private _http: HttpClient) {

	}
	getProducts() : Observable<IProduct[]> {
		return this._http.get<IProduct[]>(this._url)
			.do(data=>console.log('Products retrieved from service'))
			.catch(this.handleException);
	}
	getProductById(id:number): Observable<IProduct> {
		return this._http.get(this._url)
			.map((products:IProduct[])=>products.find(product=>product.id == id));
	}

	handleException(ex: HttpErrorResponse) {
		console.log(ex.message);
		return Observable.throw(ex.message);
	}
}