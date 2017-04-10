import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the HttpPorvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class HttpProvider {

  constructor(public http: Http) {
    console.log('Hello HttpPorvider Provider');
  }

  getJsonData(){
  return this.http.get('https://makeorder.000webhostapp.com/getFood.php').map(res => res.json());
}

}
