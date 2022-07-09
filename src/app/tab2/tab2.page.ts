import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {


    this.products = [
      { productId: '1', product: 'iphone 13', category: 'mobile', rating: 4 },
      { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2 },
      { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3 },
      { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5 }
    ];

    this.clicked();
  }
  ionViewWillEnter() {  
    this.clicked();

  }
  products: any
  gotit: any
  clickedProducts:any;

  clicked() {
    this.clickedProducts = localStorage.getItem('productId');
    for (let i = 0; i < this.products.length; i++) {
      if (this.clickedProducts == this.products[i].productId) {
        this.gotit = this.products[i].rating;
        break;
      }
    }
    console.log(this.gotit, "jhsdfjhksjkh")
  }

}
