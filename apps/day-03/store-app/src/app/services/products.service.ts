import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable()
export class ProductsService {
  private products: Product[] = [
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

  constructor() { }

  getProducts() {
    return this.products;
  }

  addProduct(product: Product) {
    console.log('ProductsService.addProduct() invoked:', product);

    this.products.unshift(product);
    console.log('ProductsService.addProduct() products:', this.products);
  }
}
