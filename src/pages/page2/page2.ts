import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-page2',
  templateUrl: 'page2.html'
})
export class Page2 {
  options: BarcodeScannerOptions;
  results: {};

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode:BarcodeScanner) {}

    async scanBarcode(){
    this.results = this.barcode.scan();
    console.log(this.results);
  }
  
}
