import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/service/products/products.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { myValidators } from '../../../utils/validators';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  form!:FormGroup;
  id!: string;
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private activatedRoute: ActivatedRoute
    ) {
    this.buildForm()
   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.id = params.id;
      this.productsService.getProduct(this.id).subscribe((product) => {
        this.form.patchValue(product)
      })
    })
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.updateProduct(this.id, product).subscribe((newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      }))
    }
    console.log(this.form.value)
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      title: ['', [Validators.required]],
      price: [Number, [Validators.required, myValidators.isPriceValid]],
      image: ['', ],
      description: ['', [Validators.required]]
    });
  }
}
