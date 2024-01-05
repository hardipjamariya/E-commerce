import { Injectable } from '@angular/core';
import { Product } from '../product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() { }
  private cartItems: { product: Product, quantity: number }[] = [];

  addToCart(product: Product) {
    const cartItem = this.cartItems.find(item => item.product.id === product.id);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      this.cartItems.push({ product, quantity: 1 });
    }
  }

  removeFromCart(item: { product: Product, quantity: number }) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      if (item.quantity > 1) {
        item.quantity--;
      } else {
        this.cartItems.splice(index, 1);
      }
    }
  }

  getCartItems(): { product: Product, quantity: number }[] {
    return this.cartItems;
  }

  calculateTotal(): number {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }

  // clearCart() {
  //   this.cartItems = [];
  // }

}
