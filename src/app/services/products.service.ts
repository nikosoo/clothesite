import { Injectable } from '@angular/core';
import { Product } from './product';
@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  products: Product[] = [
    new Product(
      1,
      'T-shirt',
      20,
      '../../assets/images/mavro-tshirt-monoxromo-800x1200h.jpg',
      3.2
    ),
    new Product(
      2,
      'Shirt',
      40,
      '../../assets/images/YS07-BLACK-1-min.jpg',
      4.1
    ),
    new Product(
      3,
      'Shoes',
      120,
      '../../assets/images/nike-air-max-95.jpg',
      4.8
    ),
    new Product(4, 'Cargo', 50, '../../assets/images/ARG03106-Edit.jpg', 4.1),
    new Product(
      1,
      'T-Shirt',
      40,
      '../../assets/images/h-embroidered-t-shirt--072025HA01-worn-1-0-0-1000-1000_g.webp',
      4.1
    ),
    new Product(
      2,
      'Shirt',
      40,
      '../../assets/images/ClassicShirt_FrenchBlue1.webp',
      4.1
    ),
    new Product(
      3,
      'Shoes',
      40,
      '../../assets/images/a25a1901-a687-4dd3-94f7-472e7af433aa.webp',
      4.1
    ),
    new Product(
      4,
      'Cargo',
      40,
      '../../assets/images/ab-tactical-baggy-cargo-pant-tan-front-10003249.webp',
      4.1
    ),
    new Product(
      5,
      'Women shirt',
      25,
      '../../assets/images/1690464245-best-white-shirts-women-reiss-64c26fdbe7df6.png',
      4.5
    ),
    new Product(
      6,
      'Women trouser',
      55,
      '../../assets/images/f3b7eb35-ea09-4bd6-b0e7-9de4157b14bd1602370012077-1.avif',
      4.7
    ),
    new Product(7, 'Women shoes', 90, '../../assets/images/sdscccc2.jpg', 4.0),
    new Product(
      8,
      'Women skirt',
      30,
      '../../assets/images/19635886-e12c-4f7f-976f-05d51520fea3.webp',
      4.2
    ),
    new Product(
      5,
      'Women shirt',
      30,
      '../../assets/images/S336LT_Talent_Slate_White_00_FS8E7hd.jpg',
      3.9
    ),
    new Product(
      6,
      'Women trouser',
      60,
      '../../assets/images/5SA_1_Zoom.jpg',
      4.7
    ),
    new Product(
      7,
      'Women shoes',
      100,
      '../../assets/images/212599804_max.jpg',
      4.4
    ),
    new Product(
      8,
      'Women skirt',
      20,
      '../../assets/images/-1117Wx1400H-462090828-white-MODEL.avif',
      4.2
    ),
  ];
  getAll() {
    return this.products;
  }
}
