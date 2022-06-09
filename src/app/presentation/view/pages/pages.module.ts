import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LoginModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
