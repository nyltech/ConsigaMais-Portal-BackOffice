import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let UsuarioComponent = class UsuarioComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.data = false;
    }
    ngOnInit() {
        // this.UserForm = this.formbulider.group({
        //   UserName: ['', [Validators.required]],
        //   LoginName: ['', [Validators.required]],
        //   Password: ['', [Validators.required]],
        //   Email: ['', [Validators.required]],
        //   ContactNo: ['', [Validators.required]],
        //   Address: ['', [Validators.required]],
        // });
    }
};
UsuarioComponent = tslib_1.__decorate([
    Component({
        selector: 'app-usuario',
        templateUrl: './usuario.component.html',
        styleUrls: ['./usuario.component.css']
    })
], UsuarioComponent);
export { UsuarioComponent };
//# sourceMappingURL=usuario.component.js.map