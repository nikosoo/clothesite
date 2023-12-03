import { Component } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductViewService } from 'src/app/services/productView.service';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-products-women',
  templateUrl: './products-women.component.html',
  styleUrls: ['./products-women.component.css'],
})
export class ProductsWomenComponent {
  productList2: Product[] = [];
  displayedProduct: Product[] = [];
  constructor(
    private prod: ProductsService,
    private msg2: ProductViewService
  ) {}

  ngOnInit() {
    this.productList2 = this.prod.getAll().slice(8, 16);
  }

  onClick(productId: number) {
    // Find the specific product based on the productName

    this.displayedProduct = this.productList2.filter(
      (product) => product.id === productId
    );
  }

  onAll() {
    this.displayedProduct = [];
  }

  sendItem2(index: number) {
    const selectedItem = this.productList2[index];
    this.msg2.sendMsg(selectedItem);
  }
}
