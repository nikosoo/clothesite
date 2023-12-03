import { Component } from '@angular/core';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: Product[] = [];
  productItem: any;
  productNumber: number = 0;

  constructor(private prod: ProductsService) {}

  ngOnInit() {
    this.productList = this.prod.getAll().slice(0, 4);
    this.productNumber = this.productNumber + this.prod.getAll().length;
  }
}
