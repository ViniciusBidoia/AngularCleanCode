import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth/auth.guard';
import { BaseComponent } from '../base/base.component';

const routes: Routes = [
  {
    path: '', component: BaseComponent, canActivate: [AuthGuard]
  }
  // { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
