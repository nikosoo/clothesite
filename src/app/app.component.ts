import { Component, OnInit } from '@angular/core';
import { ProductShowService } from './services/productShow.service';
import { ShowItemsService } from './services/showItems.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'clothessite';
  cartItem: any[] = [];
  constructor(
    private takeItems2: ProductShowService,
    private Showitem: ShowItemsService
  ) {}
  ngOnInit(): void {
    this.takeItems2.getMsg().subscribe((product: any) => {
      this.cartItem.push(product);
    });
    this.Showitem.sendMsg(this.cartItem);
  }
}
