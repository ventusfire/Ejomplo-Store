import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilde: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { 
    this.login()
  }

  ngOnInit(): void {
  }

  log(event: Event){
    event.preventDefault();
    if(this.form.valid){
      const value = this.form.value;
      this.authService.login(value.email, value.password)
      .then(() => {
        this.router.navigate(['/admin'])
      })
      .catch((err) => {
        alert(err)
      })
    }
    console.log(this.form.value)
  }

  login(){
    this.form = this.formBuilde.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    })
  }

}
