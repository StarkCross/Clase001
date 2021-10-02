import { NgModule } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { CustomdatePipe } from '../pipes/customdate.pipe';
import { UppercasePipe } from '../pipes/uppercase.pipe';
import { AdsComponent } from './ads/ads.component';
import { ButtonCalcComponent } from './button-calc/button-calc.component';
import { ContentViewComponent } from './content-view/content-view.component';
import { DropdownItemComponent } from './dropdown-item/dropdown-item.component';
import { GoHomeComponent } from './go-home/go-home.component';
import { GoTopComponent } from './go-top/go-top.component';
import { InLineComponent } from './in-line/in-line.component';
import { MenuOptionsComponent } from './menu-options/menu-options.component';
import { MyComponent } from './my-component/my-component.component';
import { NotifyItemsComponent } from './notify-items/notify-items.component';
import { SecondComponent } from './second/second.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ThirdComponent } from './third/third.component';
import { TopbarComponent } from './topbar/topbar.component';
import { UserActionsComponent } from './user-actions/user-actions.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    // librerias adicionales (Material, NgBootstrap, )
    FormsModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    MyComponent,
    SecondComponent,
    ThirdComponent,
    InLineComponent,
    SidebarComponent,
    TopbarComponent,
    NotifyItemsComponent,
    UserActionsComponent,
    MenuOptionsComponent,
    DropdownItemComponent,
    ContentViewComponent,
    AdsComponent,
    GoHomeComponent,
    GoTopComponent,
    ButtonCalcComponent,
    UppercasePipe,
    CustomdatePipe,
    CalculadoraComponent,
    LoginComponent,

  ],
  exports: [
    MyComponent,
    SecondComponent,
    ThirdComponent,
    InLineComponent,
    SidebarComponent,
    TopbarComponent,
    NotifyItemsComponent,
    UserActionsComponent,
    MenuOptionsComponent,
    DropdownItemComponent,
    ContentViewComponent,
    AdsComponent,
    GoHomeComponent,
    GoTopComponent,
    ButtonCalcComponent,
  ],
})
export class ComponentsModule {}
