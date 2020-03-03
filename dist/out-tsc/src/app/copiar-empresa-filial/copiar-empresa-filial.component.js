import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmpresaFilial } from '../_model/empresa-filial-model';
let CopiarEmpresaFilialComponent = class CopiarEmpresaFilialComponent {
    constructor(service) {
        this.service = service;
        this.copiaEmpresaFilialForm = new FormGroup({
            deEmpresa: new FormControl(''),
            paraEmpresa: new FormControl(''),
            deFilial: new FormControl(''),
            paraFilial: new FormControl(''),
        });
    }
    ngOnInit() {
    }
    copiar() {
        var emprefilial = new EmpresaFilial({
            'codEmpresaDe': this.copiaEmpresaFilialForm.value.deEmpresa,
            'codEmpresaPara': this.copiaEmpresaFilialForm.value.paraEmpresa,
            'codFilialDe': this.copiaEmpresaFilialForm.value.deFilial,
            'codFilialPara': this.copiaEmpresaFilialForm.value.paraFilial
        });
        console.log(emprefilial);
        return this.service.incluirEmpresaFilial(this.emprefilial)
            .subscribe(data => {
            this.emprefilial = data;
            console.log(this.emprefilial);
        }, err => {
            console.log(err.error);
        });
    }
};
CopiarEmpresaFilialComponent = tslib_1.__decorate([
    Component({
        selector: 'app-copiar-empresa-filial',
        templateUrl: './copiar-empresa-filial.component.html',
        styleUrls: ['./copiar-empresa-filial.component.css']
    })
], CopiarEmpresaFilialComponent);
export { CopiarEmpresaFilialComponent };
//# sourceMappingURL=copiar-empresa-filial.component.js.map