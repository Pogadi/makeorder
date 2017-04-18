import { Component } from '@angular/core';
import { NavController, NavParams} from 'ionic-angular';
import {BarcodeScanner, BarcodeScannerOptions} from '@ionic-native/barcode-scanner';
/*
  Generated class for the ScanPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-scan-page',
  templateUrl: 'scan-page.html'
})
export class ScanPagePage {
	options: BarcodeScannerOptions;

  constructor(public navCtrl: NavController, public navParams: NavParams, private barcode:BarcodeScanner) {}

    scanBarcode(){
    const results = this.barcode.scan();
    console.log(results);
  }

}
