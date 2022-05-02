import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { LogRoutingModule } from './log-routing.module';
import { LoginComponent } from './components/login/login.component';
import { CreateCountComponent } from './components/create-count/create-count.component';
import { MaterialModule } from '../material/material.module';
import { EnterComponent } from './components/enter/enter.component';


@NgModule({
  declarations: [LoginComponent, CreateCountComponent, EnterComponent],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    LogRoutingModule,
    MaterialModule
  ]
})
export class LogModule { }
