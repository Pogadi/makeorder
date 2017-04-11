import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';
import 'rxjs/add/operator/map';
import {Http} from "@angular/http";

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [HttpProvider]

})
export class Page1 {

	productData: any;
	loading: any;
  shoppingCart: any;

  constructor(public navCtrl: NavController, private httpProvider:HttpProvider, private loadingCtrl: LoadingController, private http: Http ) {
  this.loading = this.loadingCtrl.create({
  content: `
  <ion-spinner ></ion-spinner>`
	});

  this.getdata(); 
  this.shoppingCart={}; 
  this.shoppingCart.count=" ";
  this.shoppingCart.id=" ";
  }

  getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.productData=result;
      console.log("Success : "+this.productData);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
  }
  add(itemID){
    let id_customer = 4;
    let id_table = 1;
    let id = itemID;
    let count = this.shoppingCart.count;
    let food: { id: number, quantity: number }[] = [
    { "id": id, "quantity": count },
    ];
    let shoppingCart = JSON.stringify({id_customer, id_table, food});
    let link = "https://makeorder.000webhostapp.com/createOrder.php";
        this.http.post(link, shoppingCart)
      .map(res => res.json())
      .subscribe(data=>{
        
      }, error =>{
        
      });
    console.log("id: " + id + " count: " +count );
 
  }

}
