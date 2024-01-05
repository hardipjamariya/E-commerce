import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor() { }
  private products: Product[] = [
    { id: 1, name: 'Camera', price: 19.99 ,imageUrl:'https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg'},
    { id: 2, name: 'Headphone', price: 29.99 ,imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuUl9qJNZpWBC5YKngiSLhY74kR2dpFyxPWMTOj1_U&s'},
    { id: 3, name: 'Watch', price: 24.95 ,imageUrl:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVl0JlJ9SCJ9cjoEPc2NrHe2LOpxZlGz_3z3RbuFus&s'}
  ];

  // Method to get all products
  getProducts(): Product[] {
    return this.products;
  }
}
