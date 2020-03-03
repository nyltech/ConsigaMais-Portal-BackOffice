var SharedModule_1;
import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../_service/login-service';
import { AverbacaoConsultaService } from '../_service/averbacao-consulta-service';
import { EmpresaFilialService } from '../_service/empresa-filial-service';
let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [
                LoginService,
                AverbacaoConsultaService,
                EmpresaFilialService,
            ]
        };
    }
};
SharedModule = SharedModule_1 = tslib_1.__decorate([
    NgModule({
        declarations: [],
        imports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ],
        exports: [
            CommonModule,
            FormsModule,
            ReactiveFormsModule
        ]
    })
], SharedModule);
export { SharedModule };
//# sourceMappingURL=shared.module.js.map