import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
import {HttpProvider} from '../../providers/http-provider';

@Component({
  selector: 'page-page1',
  templateUrl: 'page1.html',
  providers: [HttpProvider]

})
export class Page1 {

	newsData: any;
	loading: any;

  constructor(public navCtrl: NavController, private httpProvider:HttpProvider, private loadingCtrl: LoadingController ) {
  this.loading = this.loadingCtrl.create({
  content: `
  <ion-spinner ></ion-spinner>`
	});

  this.getdata(); 
  }

  getdata(){
  this.httpProvider.getJsonData().subscribe(
    result => {
      this.newsData=result;
      console.log("Success : "+this.newsData);
    },
    err =>{
      console.error("Error : "+err);
    } ,
    () => {
      console.log('getData completed');
    }
  );
  }

}
