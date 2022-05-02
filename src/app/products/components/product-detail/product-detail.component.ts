import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { ProductsService } from '../../../core/service/products/products.service';
import { Product } from '../../../product.module';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product = {} as Product;

  constructor(
    private route: ActivatedRoute,
    private productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      const id = params.id;
      this.fetchProduct(id);
      //this.product = this.productsService.getProduct(id);
    })
  }

  fetchProduct(id: string){
    this.productsService.getProduct(id).subscribe(product => {
      this.product = product;
    });
  }

  createProduct(){
    const newProduct: Product = {"id":"4","image":"assets/images/pin.png","title":"Pin",
    "price":80000,"description":"bla bla bla bla bla"}
    this.productsService.createProduct(newProduct).subscribe(product =>{
      console.log(product)
    })
  }

  updateProduct(){
    const updaProduct: Partial<Product> = {
      id:'222',
      description: 'este producto esta actualizado',
      price: 1000
    }
    this.productsService.updateProduct('222', updaProduct).subscribe(product =>{
      console.log(product)
    })
  }

  deleteProduct(){
    this.productsService.deleteProduct('222').subscribe(rta => {
      console.log(rta)
    })
  }

}
