import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateCountComponent } from './components/create-count/create-count.component';
import { EnterComponent } from './components/enter/enter.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: EnterComponent,
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'create-count',
    component: CreateCountComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LogRoutingModule { }
