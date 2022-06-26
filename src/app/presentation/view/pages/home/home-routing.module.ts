import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/infra/auth/auth.guard';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthGuard],
    data: {
      title: 'Home'
    }
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
