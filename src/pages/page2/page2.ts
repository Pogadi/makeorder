import { Component } from '@angular/core';
import 'rxjs/add/operator/map';
import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode:BarcodeScanner) {
  	
  }

    async scanBarcode(){
    this.results = await this.barcode.scan();
    console.log(this.results);
  }
  getTableId(){
  	return this.results;
  }
}
