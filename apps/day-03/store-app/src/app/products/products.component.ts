import { Component, OnInit } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
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

  onProductCreated(product: Product) {
    this.products.unshift(product);
    console.log('Products - consuming productCreated event.');
  }
}
