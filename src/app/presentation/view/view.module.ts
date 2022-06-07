import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BaseModule } from './base/base.module';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BaseModule,
    SharedModule
  ]
})
export class ViewModule { }
