import { Component, OnInit } from '@angular/core';
import { ProductViewService } from '../services/productView.service';
import { Product } from '../services/product';
import { ProductShowService } from '../services/productShow.service';
import { ShowItemsService } from '../services/showItems.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  productGet: Product[] = [];

  constructor(
    private itemGet: ProductViewService,
    private takeItem: ProductShowService,
    private takeShow: ShowItemsService
  ) {}

  ngOnInit(): void {
    this.takeShow.getMsg().subscribe((product: any) => {
      console.log('Received product:', product);
      this.productGet = product;
    });
    console.log(this.productGet);
  }

  getTotalPrice(): number {
    return this.productGet.reduce((total, item) => {
      if (!isNaN(item.price)) {
        return total + Number(item.price); // Convert to number explicitly if needed
      } else {
        return total; // Skip adding this price to the total
      }
    }, 0);
  }

  orderButton() {
    alert('Your order has been placed');
    location.reload();
  }

  deleteItem(item: Product): void {
    const index = this.productGet.indexOf(item);
    if (index !== -1) {
      this.productGet.splice(index, 1);
    }
  }
}
