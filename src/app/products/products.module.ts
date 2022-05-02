import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsContainer } from './container/products/products.container';
import { ProductComponent } from './components/product/product.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../material/material.module';

import { ProductsRoutingModule } from './products-routing.module';


@NgModule({
  declarations: [
    ProductsContainer,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    MaterialModule
  ],
  exports: [
    
  ]
})
export class ProductsModule { }
