import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';


/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
	data : any;
	fetchdata : any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http) {
  	this.data = {};
  	this.data.username = "";
  	this.data.password = "";
  }

  login(){
  	let username = this.data.username;
  	let password = this.data.password;
  	let data = JSON.stringify({username, password});
  	let link = "https://makeorder.000webhostapp.com/login.php";

  	this.http.post(link, data)
  		.map(res => res.json())
  		.subscribe(data=>{
  			this.fetchdata = data;
  			console.log(this.fetchdata);
  		}, error =>{
  			console.log("error");
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

}
