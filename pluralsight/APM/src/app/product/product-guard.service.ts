import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class ProductGuardService implements CanActivate{

  constructor(private _route: Router) { }

  canActivate(routeSnapshot : ActivatedRouteSnapshot) : boolean {
    let id = +routeSnapshot.url[1].path
    if( isNaN(id) || id < 1 ) {
      console.log('Provided product id is not a number');
      this._route.navigate(['/products']);
      return false;
    }
    return true;
  }

}
