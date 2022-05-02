import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product.module';

import { ProductsService } from '../../../core/service/products/products.service';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  products!: Product[];
  displayedColumns: string[] = ['id', 'title', 'price', 'actions']

  constructor(
    private productsService: ProductsService
  ) { }

  ngOnInit(): void {
    this.fechtProduct();
  }

  fechtProduct(){
    this.productsService.getAllProducts()
    .subscribe(products => {
      this.products = products;
    })
  }

  deleteProduct(id: string){
    this.productsService.deleteProduct(id).subscribe(rta => {
      this.fechtProduct()
    });
  }

}
