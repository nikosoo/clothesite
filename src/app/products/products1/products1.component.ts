import { Component } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-products1',
  templateUrl: './products1.component.html',
  styleUrls: ['./products1.component.css'],
})
export class Products1Component {
  productList2: Product[] = [];
  displayedProduct: Product[] = [];
  constructor(private prod: ProductsService) {}

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
}
