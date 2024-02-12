import { Component } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductViewService } from 'src/app/services/productView.service';
import { ProductsService } from 'src/app/services/products.service';
import { Router } from '@angular/router';
import { NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-products-men',
  templateUrl: './products-men.component.html',
  styleUrls: ['./products-men.component.css'],
})
export class ProductsMenComponent {
  productList1: Product[] = [];
  displayedProduct: Product[] = [];
  productItem: Product;

  constructor(
    private prod1: ProductsService,
    private msg: ProductViewService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productList1 = this.prod1.getAll().slice(0, 8);
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        window.scrollTo(0, 0); // Scroll to the top
      }
    });
  }

  onClick(productId: number) {
    this.displayedProduct = this.productList1.filter(
      (product) => product.id === productId
    );
  }

  onAll() {
    this.displayedProduct = [];
  }

  sendItem(index: number) {
    const selectedItem = this.productList1[index];
    this.msg.sendMsg(selectedItem);
  }
}
