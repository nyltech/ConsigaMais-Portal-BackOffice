import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';
let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        this.Url = 'URL da API';
        const headerSettings = {};
        this.header = new HttpHeaders(headerSettings);
    }
    Login(model) {
        debugger;
        var a = this.Url + 'UserLogin';
        return this.http.post(this.Url + 'UserLogin', model, { headers: this.header });
    }
    CreateUser(usuario) {
        const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
        return this.http.post(this.Url + '/createcontact/', usuario, httpOptions);
    }
};
LoginService = tslib_1.__decorate([
    Injectable({
        providedIn: 'root'
    })
], LoginService);
export { LoginService };
//# sourceMappingURL=login-service.js.map