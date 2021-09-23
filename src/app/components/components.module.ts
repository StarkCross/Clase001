import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { InLineComponent } from './in-line/in-line.component';
import { MyComponent } from './my-component/my-component.component';
import { Second } from './second/second.component';
import { ThirdComponent } from './third/third.component';

@NgModule({
  imports: [
    // librerias adicionales (Material, NgBootstrap, )
    FormsModule
  ],
  declarations: [
    MyComponent,
    Second,
    ThirdComponent,
    InLineComponent
  ],
  exports: [
    MyComponent,
    Second,
    ThirdComponent,
    InLineComponent
  ]
})

export class ComponentsModule { }
