import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { Product } from '../../models/product';
import { ProductsService } from '../../services/products.service';
import { LoggingService } from '../../services/logging.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product: Product = new Product();
  id: number;

  constructor(
    private productsService: ProductsService,
    private loggingService: LoggingService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe((map) => {
      this.id = +map.get('id');
      if (isNaN(this.id) || !this.id) { return; }

      this.product = this.productsService.getProduct(this.id);
      if (!this.product) {
        // if product does not exist, ensure that the product object is not null to avoid
        // null reference exception
        this.product = new Product();
      }
    });
  }

  onEdit() {
    this.loggingService.logMessage('Product Detail - Edit button clicked.');
    this.router.navigate(['/products', this.id, 'edit']);
  }

  onDelete() {
    this.loggingService.logMessage('Product Detail - Delete button clicked.');
    this.productsService.deleteProduct(this.id);
    this.router.navigate(['/products']);
  }
}
