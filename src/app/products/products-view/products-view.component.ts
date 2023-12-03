import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/services/product';
import { ProductShowService } from 'src/app/services/productShow.service';
import { ProductViewService } from 'src/app/services/productView.service';

@Component({
  selector: 'app-products-view',
  templateUrl: './products-view.component.html',
  styleUrls: ['./products-view.component.css'],
})
export class ProductsViewComponent implements OnInit {
  productView1: Product;

  constructor(
    private msg1: ProductViewService,
    private sendItem: ProductShowService
  ) {}
  ngOnInit(): void {
    this.msg1.getMsg().subscribe((product: any) => {
      this.productView1 = product;
    });
  }

  orderItem() {
    this.sendItem.sendMsg(this.productView1);
  }
}
