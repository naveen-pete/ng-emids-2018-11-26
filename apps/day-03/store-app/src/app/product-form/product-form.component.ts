import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Product } from '../models/product';
import { LoggerService } from '../services/logger.service';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  @Output() productCreated = new EventEmitter<Product>();
  product: Product = new Product();
  showMessage = false;
  // private loggerService: LoggerService;

  constructor(
    private loggerService: LoggerService,
    private productsService: ProductsService
  ) {
    // this.loggerService = loggerService;
  }

  ngOnInit() {}

  onSubmit() {
    this.loggerService.log('ProductForm - Calling ProductsService.addProduct() method');
    this.productsService.addProduct(this.product);
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
