export class Product {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  rating: number;

  constructor(
    id: number,
    name: string,
    price: number,
    imageUrl: string,
    rating: number
  ) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.rating = rating;
  }
}
