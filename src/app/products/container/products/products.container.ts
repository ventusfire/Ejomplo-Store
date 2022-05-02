import { Component, OnInit } from '@angular/core';
import { Product } from '../../../product.module';
import { ProductsService } from '@core/service/products/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.container.html',
  styleUrls: ['./products.container.css']
})
export class ProductsContainer implements OnInit {

  products: Product[] = [];
  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fetchProducts()
  }

  clickProduct(id: string): void{
    console.log('product');
    console.log(id);
  }

  fetchProducts(){
    this.productsService.getAllProducts().subscribe(products => {
      this.products = products;
    })
  }

}
