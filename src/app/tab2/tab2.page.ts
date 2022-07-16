import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor() {



    this.products = [
      { productId: '1', product: 'iphone 13', category: 'mobile', rating: 4, src: '../../assets/images/iphone-13.jpg', global: 3.5, local: 2.5, lifestyle: 4, percent: [{ star5: 0.84 }, { star4: 0.15 }, { star3: 0.5 }, { star2: 0.18 }, { star1: 0.1 }] },
      { productId: '2', product: 'Panasonic Oven', category: 'Electronics', rating: 2, src: '../../assets/images/oven.jpg', global: 2.5, local: 3, lifestyle: 2, percent: [{ star5: 0.66 }, { star4: 0.35 }, { star3: 0.25 }, { star2: 0.28 }, { star1: 0.5 }] },
      { productId: '3', product: 'Vittara Brezza', category: 'Automobile', rating: 3, src: '../../assets/images/vittara.jpg', global: 3, local: 4, lifestyle: 3, percent: [{ star5: 0.74 }, { star4: 0.45 }, { star3: 0.25 }, { star2: 0.38 }, { star1: 0.26 }] },
      { productId: '4', product: 'Nestle Maggi', category: 'Food', rating: 2.5, src: '../../assets/images/maggi.png', global: 2, local: 2.5, lifestyle: 3.5, percent: [{ star5: 0.58 }, { star4: 0.63 }, { star3: 0.57 }, { star2: 0.58 }, { star1: 0.35 }] },
      { productId: '5', product: 'LG washing Machine', category: 'Home Appliance', rating: 3.5, src: '../../assets/images/washing.jpg', global: 4, local: 3.5, lifestyle: 4.5, percent: [{ star5: 0.12 }, { star4: 0.42 }, { star3: 0.63 }, { star2: 0.41 }, { star1: 0.96 }] },
      { productId: '6', product: 'Sofa', category: 'Furniture', rating: 4.5, src: '../../assets/images/sofa.jpg', global: 4, local: 2.5, lifestyle: 4, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] },
      { productId: '7', product: 'Pedigree', category: 'Pet Food', rating: 1.5, src: '../../assets/images/pedigree.jpg', global: 3, local: 2, lifestyle: 3.5, percent: [{ star5: 0.80 }, { star4: 0.30 }, { star3: 0.45 }, { star2: 0.12 }, { star1: 0.08 }] }
    ];

    this.clicked();
  }

  ionViewWillEnter() {
    this.clicked();
  }

  products: any
  gotit: any
  clickedProducts: any;
  star1: string;
  star2: string;
  star3: string;
  star4: string;
  star5: string;

  clicked() {
    this.star1 = 'star-outline';
    this.star2 = 'star-outline';
    this.star3 = 'star-outline';
    this.star4 = 'star-outline';
    this.star5 = 'star-outline';

    this.clickedProducts = localStorage.getItem('productId');
    for (let i = 0; i < this.products.length; i++) {
      if (this.clickedProducts == this.products[i].productId) {
        this.gotit = this.products[i];
        switch (this.gotit.rating) {
          case 1: {
            this.star1 = 'star'
            break;
          }

          case 1.5: {
            this.star1 = 'star'
            this.star2 = 'star-half-outline'
            break;
          }

          case 2: {
            this.star1 = 'star'
            this.star2 = 'star'
            break;
          }

          case 2.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star-half-outline'
            break;
          }

          case 3: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            break;
          }

          case 3.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star-half-outline'
            break;
          }

          case 4: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            break;
          }

          case 4.5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            this.star5 = 'star-half-outline'
            break;
          }

          case 5: {
            this.star1 = 'star'
            this.star2 = 'star'
            this.star3 = 'star'
            this.star4 = 'star'
            this.star5 = 'star'
            break;
          }
        }
        break;
      }
    }
  }

}
