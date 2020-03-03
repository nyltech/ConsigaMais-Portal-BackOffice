import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { UsuarioConsultaComponent } from './usuario-consulta/usuario-consulta.component';
import { AverbacaoConsultaComponent } from './averbacao-consulta/averbacao-consulta.component';
import { CopiarEmpresaFilialComponent } from './copiar-empresa-filial/copiar-empresa-filial.component';
const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: LoginComponent,
        data: {
            title: 'Login'
        }
    },
    {
        path: 'dasboard',
        component: DashboardComponent,
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'usuario',
        component: UsuarioComponent,
        data: {
            title: 'Usuario'
        }
    },
    {
        path: 'usuario-consulta',
        component: UsuarioConsultaComponent,
        data: {
            title: 'Consultar Usuario'
        }
    },
    {
        path: 'averbacao-consulta',
        component: AverbacaoConsultaComponent,
        data: {
            title: 'Consultar Averbacao'
        }
    },
    {
        path: 'cop-emp-fil',
        component: CopiarEmpresaFilialComponent,
        data: {
            title: 'Copiar Empresa Filial'
        }
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib_1.__decorate([
    NgModule({
        imports: [RouterModule.forRoot(routes)],
        exports: [RouterModule]
    })
], AppRoutingModule);
export { AppRoutingModule };
//# sourceMappingURL=app-routing.module.js.map