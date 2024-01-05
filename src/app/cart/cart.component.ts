// cart.component.ts
import { Component } from '@angular/core';
import { Product } from '../product';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  cartItems: { product: Product, quantity: number }[] = [];

  constructor(private cartService: CartService) {
    this.cartItems = this.cartService.getCartItems();
  }

  removeFromCart(item: { product: Product, quantity: number }) {
    this.cartService.removeFromCart(item);
  }

  calculateTotal() {
    return this.cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  }
}
