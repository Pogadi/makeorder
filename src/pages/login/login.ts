import { Component } from '@angular/core';
import { NavController, NavParams, MenuController } from 'ionic-angular';
import {Http} from "@angular/http";
import 'rxjs/add/operator/map';
import { Page1 } from '../page1/page1';
import { AlertController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';


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

  constructor(public navCtrl: NavController, public navParams: NavParams, private http : Http,
    private alert: AlertController, private loading : LoadingController, private menu : MenuController) {
  	this.data = {};
  	this.data.username = "";
  	this.data.password = "";
    this.menu = menu;
    menu.swipeEnable(false);
  }

  

  login(){
  	let username = this.data.username;
  	let password = this.data.password;
  	let data = JSON.stringify({username, password});
  	let link = "https://makeorder.000webhostapp.com/login.php";

  	this.http.post(link, data)
  		.map(res => res.json())
  		.subscribe(data=>{
        let loader = this.loading.create({
          content: "Checking! Please wait...",
          duration: 1000
        });
        loader.present();
        this.navCtrl.setRoot(Page1);
        this.menu.swipeEnable(true);
  			this.fetchdata = data;
  			console.log(this.fetchdata);
  		}, error =>{
  			let alert = this.alert.create({
          title: 'Warning',
          subTitle: 'Wrong Username or Password!',
          buttons: ['OK']
        });
        alert.present();
  		});
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }



}
