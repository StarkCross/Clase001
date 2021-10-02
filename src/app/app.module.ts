import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { BrowserModule } from '@angular/platform-browser';

import { environment } from '@src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { OtherComponentComponent } from './other-component/other-component.component';

@NgModule({
  declarations: [AppComponent, OtherComponentComponent],
  imports: [
    AngularFireModule.initializeApp(environment.firebaseConfig, 'usuariosApp'),
    AngularFirestoreModule,
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
