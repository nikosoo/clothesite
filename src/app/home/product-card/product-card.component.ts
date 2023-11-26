import { Component, Input } from '@angular/core';
import { Product } from 'src/app/shared/product';
import { ProductsService } from 'src/app/shared/products.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'],
})
export class ProductCardComponent {
  @Input() productList: Product[] = [];
  @Input() productItem: any;
}
