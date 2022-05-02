import { Injectable } from '@angular/core';

import { Product } from '../../product.module';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private products: Product[] = []
  private cart = new BehaviorSubject<Product[]>([])

  cart$ = this.cart.asObservable()
  constructor() { }

  addCart(produc: Product){
    this.products = [...this.products, produc];
    this.cart.next(this.products)
  }
}
