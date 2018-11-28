import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage = false;

  constructor() {}

  ngOnInit() {}

  onSubmit() {
    console.log('ProductForm - Raising productCreated event.');
    this.productCreated.emit(this.product);
    this.product = new Product();
    this.showMessage = true;

    // const o = this;

    // setTimeout(function() {
    //   o.showMessage = false;
    // }, 5000);

    setTimeout(() => {
      this.showMessage = false;
    }, 5000);

  }
}
