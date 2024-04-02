import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {DialogModule} from '@angular/cdk/dialog';
import { InterceptorService } from './core/services/config/interceptor.service';
import { SharedModule } from './core/shared/shared.module';

import { UsuarioService } from '../app/core/services/usuario/usuario.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    FontAwesomeModule,
    HttpClientModule,
    DialogModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    },
    UsuarioService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
