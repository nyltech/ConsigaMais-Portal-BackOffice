import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
let LoginComponent = class LoginComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.model = {};
    }
    ngOnInit() {
        sessionStorage.removeItem('UserName');
        sessionStorage.clear();
    }
};
LoginComponent = tslib_1.__decorate([
    Component({
        selector: 'app-login',
        templateUrl: './login.component.html',
        styleUrls: ['./login.component.css']
    })
], LoginComponent);
export { LoginComponent };
//# sourceMappingURL=login.component.js.map