import { Component, OnInit } from '@angular/core';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import { ProductViewService } from '../services/productView.service';
import { ProductShowService } from '../services/productShow.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  constructor(
    private itemGet: ProductViewService,
    private takeitem2: ProductShowService
  ) {}
  ngOnInit(): void {}
}
