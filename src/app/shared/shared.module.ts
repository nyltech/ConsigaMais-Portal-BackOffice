import {NgModule, ModuleWithProviders} from '@angular/core'
import {CommonModule} from '@angular/common'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import { LoginService } from '../_service/login-service'
import { AverbacaoConsultaService } from '../_service/averbacao-consulta-service'
import { EmpresaFilialService } from '../_service/empresa-filial-service'


@NgModule({
  declarations: [],
  imports: [
              CommonModule,
              FormsModule,
              ReactiveFormsModule],
  exports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule 
            ]
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers:[
                  LoginService,
                  AverbacaoConsultaService,
                  EmpresaFilialService,
                ]
    }
  }
}