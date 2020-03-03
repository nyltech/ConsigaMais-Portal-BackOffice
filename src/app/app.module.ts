import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatInputModule, MatButtonModule, MatSelectModule, MatIconModule, MatMenuModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AlertModule } from 'ngx-bootstrap/alert';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { AverbacaoConsultaComponent } from './averbacao-consulta/averbacao-consulta.component';
import { CopiarEmpresaFilialComponent } from './copiar-empresa-filial/copiar-empresa-filial.component';

import {SharedModule} from './shared/shared.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UsuarioComponent,
    DashboardComponent,
    HeaderComponent,
    UsuarioConsultaComponent,
    AverbacaoConsultaComponent,
    CopiarEmpresaFilialComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,

    AlertModule.forRoot(),

    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatIconModule,
    MatMenuModule,

    SharedModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
