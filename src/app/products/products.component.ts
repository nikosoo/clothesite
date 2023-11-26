import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/product';
import { ProductsService } from '../shared/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  productList1: Product[] = [];
  displayedProduct: Product[] = [];

  constructor(private prod1: ProductsService) {}

  ngOnInit() {
    this.productList1 = this.prod1.getAll().slice(0, 8);
  }

  onClick(productId: number) {
    // Find the specific product based on the productName

    this.displayedProduct = this.productList1.filter(
      (product) => product.id === productId
    );
  }

  onAll() {
    this.displayedProduct = [];
  }
}
