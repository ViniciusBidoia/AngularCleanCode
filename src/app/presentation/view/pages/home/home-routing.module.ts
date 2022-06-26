import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RouteService } from '../route.service';
import { HomeComponent } from './home.component';

const routes: Routes = [
  RouteService.withShell([
    {
      path: 'home', component: HomeComponent,
      data: {
        title: 'Home'
      }
    },
    { path: '', redirectTo: '/home', pathMatch: 'full' }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
