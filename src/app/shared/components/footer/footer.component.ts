import { Component, OnInit } from '@angular/core';
import { FormControl, Validator, Validators } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  emailField: FormControl;

  constructor() {
    this.emailField = new FormControl('', [
    Validators.required,
    Validators.email
  ]);
    // this.emailField.valueChanges.subscribe(vale => {
    //    console.log(vale)
    // })
   }

  ngOnInit(): void {
  }

  sendEmail(){
    if (this.emailField.valid) {
      console.log(this.emailField.value);
    }
  }

}
