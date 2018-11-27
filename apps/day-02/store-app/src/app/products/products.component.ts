import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  showMessage = false;
  product: Product = new Product();

  products: Product[] = [
    {
      id: 1,
      name: 'KTM Duke',
      price: 350000,
      description: 'Description for KTM',
      isAvailable: true
    },
    {
      id: 2,
      name: 'Pulsar',
      price: 100000,
      description: 'Description for Pulsar',
      isAvailable: true
    },
    {
      id: 3,
      name: 'Activa',
      price: 70000,
      description: 'Description for Activa',
      isAvailable: false
    }
  ];

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    this.products.unshift(this.product);
    this.product = new Product();
    this.showMessage = true;

    console.log('onSubmit() - this:', this);
    // const o = this;

    // setTimeout(function() {
    //   o.showMessage = false;
    //   console.log('setTimeout callback called. showMessage reset to false');
    //   console.log('callback() - this:', this);
    // }, 5000);

    setTimeout(() => {
      this.showMessage = false;
      console.log('setTimeout callback called. showMessage reset to false');
      console.log('callback() - this:', this);
    }, 5000);

  }
}
