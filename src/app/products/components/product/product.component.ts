import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../product.module';
import { CartService } from '../../../core/service/cart.service';
@Component({
    selector: 'app-product',
    templateUrl: './product.component.html',
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
   @Input() product!: Product;
   @Output() productClicked: EventEmitter<any> = new EventEmitter();

   today = new Date();
   constructor(
       private cartService: CartService
   ){

   }
   addCart(): void{
       console.log('añadido al carrito');
       this.cartService.addCart(this.product)
    //    this.productClicked.emit(this.product.id);
   }
}