import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { LoginModule } from './login/login.module';
import { HomeModule } from './home/home.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    PagesRoutingModule,
    LoginModule,
    HomeModule
  ],
  exports: [
    PagesRoutingModule
  ]
})
export class PagesModule { }
