import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

import { LoadingController, Platform, ToastController } from '@ionic/angular';

import { Router } from '@angular/router';

import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';




@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {


  slideOpts = {
    preloadImages: true,
    slidesPerView: 2.2,
    speed: 500,
    autoplay: true
  };

  product: any
  canvasElement: any;
  videoElement: any;
  canvasContext: any;
  scanActive = false;
  scanResult = null;
  loading: HTMLIonLoadingElement = null;

  constructor(
    private toastCtrl: ToastController,
    private loadingCtrl: LoadingController,
    private plt: Platform,
    private router: Router,
    private scanner: BarcodeScanner


  ) {

    this.scan();

    this.product = [
      { productId: '1', product: 'iphone 13', category: 'mobile', rating: 4, src: '../../assets/images/iphone-13.jpg' },
      { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2, src: '../../assets/images/oven.jpg' },
      { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3, src: '../../assets/images/vittara.jpg' },
      { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5, src: '../../assets/images/maggi.png' },
      { productId: '4', product: 'LG washing Machine', category: 'Home Appliance', rating: 3.5, src: '../../assets/images/washing.jpg' }
    ];

  }

  move(params: any) {
    console.log(params, "id")
    localStorage.setItem('productId', params);
    this.router.navigate(['/tabs/tab2']);
  }

  scan() {
    this.scanner.scan().then(barcodeData => {
      if (barcodeData == this.product.productId) {
        this.move(barcodeData);
      }
    }).catch(err => {
      console.log('Error', err);
    });
  }
}
