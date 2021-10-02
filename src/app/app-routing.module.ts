import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContentViewComponent } from '@components/content-view/content-view.component';
import { MyComponent } from '@components/my-component/my-component.component';
import { TopbarComponent } from '@components/topbar/topbar.component';
import { CalculadoraComponent } from './components/calculadora/calculadora.component';
import { LoginComponent } from './components/login/login.component';
import { GuardService } from './services/guard/guard.service';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: ContentViewComponent
    //canActivate: [GuardService],
  },
  {
    path: 'calculadora',
    component: CalculadoraComponent
   // canActivate: [GuardService],
  },
  { path: 'home/user', component: MyComponent, canActivate: [GuardService] },
  {
    path: 'home/user/:usuario_id',
    component: MyComponent
    //canActivate: [GuardService],
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
