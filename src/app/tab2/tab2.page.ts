import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {



    this.products = [
      { productId: '1', product: 'iphone 13', category: 'mobile', rating: 4, src: '../../assets/images/iphone-13.jpg', global: 3.5, local: 2.5, lifestyle: 4, percent: [{ star5: 0.84, star4: 0.15, star3: 0.5, star2: 0.18, star1: 0.1 }] },
      { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2, src: '../../assets/images/oven.jpg', global: 2.5, local: 3, lifestyle: 2, percent: [{ star5: 0.66 }, { star4: 0.35 }, { star3: 0.25 }, { star2: 0.28 }, { star1: 0.5 }] },
      { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3, src: '../../assets/images/vittara.jpg', global: 3, local: 4, lifestyle: 3, percent: [{ star5: 0.74 }, { star4: 0.45 }, { star3: 0.25 }, { star2: 0.38 }, { star1: 0.26 }] },
      { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5, src: '../../assets/images/maggi.png', global: 2, local: 2.5, lifestyle: 3.5, percent: [{ star5: 0.58 }, { star4: 0.63 }, { star3: 0.57 }, { star2: 0.58 }, { star1: 0.35 }] },
      { productId: '4', product: 'LG washing Machine', category: 'Home Appliance', rating: 3.5, src: '../../assets/images/washing.jpg', global: 4, local: 3.5, lifestyle: 4.5, percent: [{ star5: 0.12 }, { star4: 0.42 }, { star3: 0.63 }, { star2: 0.41 }, { star1: 0.96 }] },
    ];

    this.clicked();
  }
  ionViewWillEnter() {
    this.clicked();

  }
  products: any
  gotit: any
  clickedProducts: any;

  clicked() {
    this.clickedProducts = localStorage.getItem('productId');
    for (let i = 0; i < this.products.length; i++) {
      if (this.clickedProducts == this.products[i].productId) {
        this.gotit = this.products[i];
        break;
      }
    }
    console.log(this.gotit, "jhsdfjhksjkh")
  }

}
