import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProductsService } from '../../../core/service/products/products.service';
import { Router } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { myValidators } from '../../../utils/validators';


@Component({
  selector: 'app-from-products',
  templateUrl: './from-products.component.html',
  styleUrls: ['./from-products.component.css']
})
export class FromProductsComponent implements OnInit {

  form!:FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
    private productsService: ProductsService,
    private router: Router,
    private angularFireStorage: AngularFireStorage
    ) {
    this.buildForm()
   }

  ngOnInit(): void {
  }

  saveProduct(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const product = this.form.value;
      this.productsService.createProduct(product).subscribe((newProduct => {
        console.log(newProduct);
        this.router.navigate(['./admin/products'])
      }))
    }
    console.log(this.form.value)
  }

  uploadFile(event: any){
    const file = event.target.files[0]
    const dir = 'images';
    const fileRef = this.angularFireStorage.storage.ref(dir);
    /*const task = this.angularFireStorage.storage.upload(dir,file)*/
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      id: ['', [Validators.required]],
      title: ['', [Validators.required]],
      price: [Number, [Validators.required, myValidators.isPriceValid]],
      image: ['', ],
      description: ['', [Validators.required]]
    });
  }

}
