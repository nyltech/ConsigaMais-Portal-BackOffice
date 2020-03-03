import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
let AverbacaoConsultaComponent = class AverbacaoConsultaComponent {
    constructor(averbacaoService, route, activeRouter) {
        this.averbacaoService = averbacaoService;
        this.route = route;
        this.activeRouter = activeRouter;
        this.averbacaoForm = new FormGroup({
            codigo: new FormControl(''),
        });
    }
    ngOnInit() {
    }
    consultar() {
        console.log(this.averbacaoForm);
        return this.averbacaoService.averbacaoByIdEmpresa(this.averbacaoForm.value.codigo)
            .subscribe(data => {
            // essa linha será executada no caso de retorno sem erros         
            this.averbacao = data;
            console.log(this.averbacao);
            // if (this.returnUrl == null) {
            //   this.route.navigate(['/']);
            // } else {
            //   this.route.navigate([this.returnUrl]);
            // }
        }, err => {
            console.log(err.error);
            this.mensagem = err.error;
        });
    }
};
AverbacaoConsultaComponent = tslib_1.__decorate([
    Component({
        selector: 'app-averbacao-consulta',
        templateUrl: './averbacao-consulta.component.html',
        styleUrls: ['./averbacao-consulta.component.css']
    })
], AverbacaoConsultaComponent);
export { AverbacaoConsultaComponent };
//# sourceMappingURL=averbacao-consulta.component.js.map