import { Component } from '@angular/core';
import { Product } from '../services/product';
import { ProductsService } from '../services/products.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  productList: Product[] = [];
  productItem: any;
  productNumber: number = 0;

  constructor(private prod: ProductsService, private router: Router) {}

  ngOnInit() {
    this.productList = this.prod.getAll().slice(0, 4);
    this.productNumber = this.productNumber + this.prod.getAll().length;
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top
      }
    });
  }
}
