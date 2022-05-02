import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthService } from '../../../core/services/auth.service';

@Component({
  selector: 'app-create-count',
  templateUrl: './create-count.component.html',
  styleUrls: ['./create-count.component.css']
})
export class CreateCountComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) {
    this.buildForm();
   }

  ngOnInit(): void {
  }

  createCount(envent: Event){
    envent.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.createUser(value.name, value.email, value.password)
      .then(() => {
        this.router.navigate(['/enter/login'])
      });
    }
    console.log(this.form.value)
  }

  private buildForm(){
    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }


}
