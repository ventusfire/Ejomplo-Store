import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsContainer } from './container/products/products.container';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';

const routes: Routes = [
    {
        path: '',
        component: ProductsContainer
    },
    {
        path: ':id',
        component: ProductDetailComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class ProductsRoutingModule {}