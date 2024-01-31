import { Component } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductViewService } from 'src/app/services/productView.service';
import { ProductsService } from 'src/app/services/products.service';

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
    private msg: ProductViewService
  ) {}

  ngOnInit() {
    this.productList1 = this.prod1.getAll().slice(0, 8);
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
