(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet>\n</router-outlet>\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/averbacao-consulta/averbacao-consulta.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/averbacao-consulta/averbacao-consulta.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header> </app-header>\n\n<div class=\"container\">\n    <p class=\"text-center\"></p>\n    <hr>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-9\">\n            <div class=\"card\">\n                <header class=\"card-header\">\n                    <h5 class=\"card-title mt-2\"> <i class=\"fa fa-money\" aria-hidden=\"true\"></i> - Consultar Averbação\n                    </h5>\n                </header>\n                <article class=\"card-body\">\n                    <form [formGroup]=\"averbacaoForm\" (ngSubmit)=\"consultar()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-4\">\n                                <label>Código Empresa</label>\n                                <div class=\"required-field-block\">\n                                    <input type=\"number\" class=\"form-control\" formControlName=\"codigo\" id=\"inputCodigo\"\n                                        name=\"inputCodigo\" placeholder=\"\" required>                                        \n                                </div>\n                                \n                            </div>\n\n                            <div class=\"form-group col-md-4 text-center\">\n                                <label>&nbsp;</label>\n                                <br>\n                                <button type=\"submit\" [disabled]=\"!averbacaoForm.valid\"\n                                    class=\"btn btn-primary btn-success\"> Pesquisar </button>\n                            </div>\n\n                        </div>\n\n                        <hr>\n                        <div class=\"col-xs-12 table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Código</th>\n                                        <th>Empresa</th>\n                                        <th class=\"text-center\">Prazo Expiração</th>\n                                        <th>Averbação</th>\n                                        <th>Pagamento</th>\n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td class=\"text-center\">\n                                            {{averbacao?.codigo}}\n                                        </td>\n                                        <td>\n                                            {{averbacao?.empresa}}\n                                        </td>\n                                        <td class=\"text-center\">\n                                            {{averbacao?.diasExpiracaoProposta}}\n                                        </td>\n                                        <td>\n                                            {{averbacao?.dataAverbacao | date: 'dd/MM/yyyy'}}\n                                        </td>\n                                        <td>\n                                            {{averbacao?.dataPagamento | date: 'dd/MM/yyyy'}}\n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n                    </form>\n                </article>\n            </div>\n        </div>\n\n    </div>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/copiar-empresa-filial/copiar-empresa-filial.component.html":
/*!******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/copiar-empresa-filial/copiar-empresa-filial.component.html ***!
  \******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header> </app-header>\n\n<div class=\"container\">\n    <p class=\"text-center\"></p>\n    <hr>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-9\">\n            <div class=\"card\">\n                <header class=\"card-header\">\n                    <h5 class=\"card-title mt-2\"> <i class=\"fa fa-exchange\" aria-hidden=\"true\"></i> - Copiar Empresa /\n                        Filial</h5>\n                </header>\n                <article class=\"card-body\">\n                    <form [formGroup]=\"copiaEmpresaFilialForm\" (ngSubmit)=\"copiar()\">\n                        <div class=\"required-field-block\">\n\n                            <div class=\"form-row\">\n                                <div class=\"col form-group\">\n                                    <label>Empresa</label>\n                                    <input type=\"number\" formControlName=\"deEmpresa\" id=\"deEmpresa\" name=\"deEmpresa\"\n                                        class=\"form-control\" placeholder=\"Código de\" required>\n                                </div>\n                                <div class=\"col form-group\">\n                                    <label>&nbsp;</label>\n                                    <input type=\"number\" formControlName=\"paraEmpresa\" id=\"paraEmpresa\"\n                                        name=\"paraEmpresa\" class=\"form-control\" placeholder=\"Código para\" required>\n                                </div>\n                            </div>\n                            <hr>\n                            <div class=\"form-row\">\n                                <div class=\"col form-group\">\n                                    <label>Filial</label>\n                                    <input type=\"number\" formControlName=\"deFilial\" id=\"deFilial\" name=\"deFilial\"\n                                        class=\"form-control\" placeholder=\"Código de\" required>\n                                </div>\n                                <div class=\"col form-group\">\n                                    <label>&nbsp;</label>\n                                    <input type=\"number\" formControlName=\"paraFilial\" id=\"paraFilial\" name=\"paraFilial\"\n                                        class=\"form-control\" placeholder=\"Código para\" required>\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-right\">\n                            <button type=\"submit\" [disabled]=\"!copiaEmpresaFilialForm.valid\"\n                                class=\"btn btn-primary btn-success\">\n                                Executar </button>\n                        </div>\n\n                        <alert *ngIf=\"result\" type=\"success\">\n                            <strong></strong> Cópia realizada com sucesso!\n                        </alert>\n                        \n                        <!-- <alert *ngIf=\"!result\" type=\"danger\">\n                            <strong>Ops!</strong> Ocorreu um erro, tente novamente!\n                        </alert>  -->\n                    </form>\n                </article>\n            </div>\n        </div>\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header> </app-header>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n    \n    <a class=\"navbar-brand ml-5\"><img src=\"assets/img/logo.svg\" /></a>\n    \n    <div class=\"collapse navbar-collapse\" id=\"navbarNavDropdown\">\n        <ul class=\"navbar-nav ml-auto mr-5\">\n\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Atendimento\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"/averbacao-consulta\">Consultar Averbação</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                </div>\n            </li>\n\n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Operação\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"/cop-emp-fil\">Copiar Empresa Filial</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                </div>\n            </li>\n           \n            <li class=\"nav-item dropdown\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Tecnologia\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n                </div>\n            </li>\n\n            <li class=\"nav-item dropdown disabled\">\n                <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdownMenuLink\" role=\"button\"\n                    data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Configuração\n                </a>\n                <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdownMenuLink\">\n                    <a class=\"dropdown-item\" href=\"/usuario\">Cadastro Usuário</a>\n                    <a class=\"dropdown-item\" href=\"/usuario-consulta\">Consulta Usuário</a>\n                    <a class=\"dropdown-item\" href=\"#\">...</a>\n\n                </div>\n            </li>\n        </ul>\n    </div>\n</nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!DOCTYPE html>\n<html>\n\n<body>\n    \n    <div class=\"login-form\">\n        \n        <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"text-center\">\n                <a [routerLink]=\"['/']\" class=\"navbar-brand\"><img src=\"assets/img/logo.svg\" /></a>\n            </div>\n            <div class=\"form-group\">\n                <input type=\"text\" class=\"form-control\" formControlName=\"email\" placeholder=\"E-mail\" required=\"required\">\n            </div>\n            <div class=\"form-group\">\n                <input type=\"password\" class=\"form-control\" formControlName=\"senha\" placeholder=\"Senha\" required=\"required\">\n            </div>\n            <div class=\"form-group text-right\">\n                <button type=\"submit\" class=\"btn btn-primary btn-success\">Logar</button>\n            </div>\n\n        </form>\n\n    </div>\n</body>\n\n</html>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-consulta/usuario-consulta.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-consulta/usuario-consulta.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header> </app-header>\n\n<div class=\"container\">\n    <p class=\"text-center\"></p>\n    <hr>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-9\">\n            <div class=\"card\">\n                <header class=\"card-header\">\n                    <h5 class=\"card-title mt-2\"> <i class=\"fa fa-users\" aria-hidden=\"true\"></i> - Consultar Usuário</h5>\n                </header>\n                <article class=\"card-body\">\n                    <form>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-2\">\n                                <label>Campo</label>\n                                <select id=\"inputStatus\" class=\"form-control\">\n                                    <option value=\"1\" selected=\"\">Nome</option>\n                                    <option value=\"2\">E-mail</option>\n                                    <option value=\"3\">Perfil</option>\n                                    <option value=\"4\">Status</option>\n                                </select>\n                            </div>\n\n                            <div class=\"form-group col-md-10\">\n                                <label>Parâmetro</label>\n                                <input type=\"text\" class=\"form-control\" placeholder=\"\">\n                            </div>\n\n                        </div>\n\n                        <div class=\"form-group col-md-12 text-right\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-success\"> Pesquisar </button>\n                        </div>\n\n                        <hr>\n                        <div class=\"col-xs-12 table-responsive\">\n                            <table class=\"table table-striped\">\n                                <thead>\n                                    <tr>\n                                        <th>Nome</th>\n                                        <th>E-mail</th>\n                                        <th>Perfil</th>\n                                        <th>Status</th>\n                                        <th class=\"text-center\">...</th>                                        \n                                    </tr>\n                                </thead>\n                                <tbody>\n                                    <tr>\n                                        <td>\n                                            Nome usuario\n                                        </td>\n                                        <td>\n                                            nilton.santos@consigamais.com.br\n                                        </td>\n                                        <td>\n                                            Configuração \n                                        </td>\n                                        <td>\n                                            Ativo\n                                        </td>\n                                        <td class=\"text-center\">\n                                            <a href=\"usuario\"><i class=\"fa fa-user-plus\" aria-hidden=\"true\"></i></a> \n                                        </td>\n                                    </tr>\n                                </tbody>\n                            </table>\n                        </div>\n\n                    </form>\n                </article>\n            </div>\n        </div>\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n<app-header> </app-header>\n\n<div class=\"container\">\n    <p class=\"text-center\"></p>\n    <hr>\n\n    <div class=\"row justify-content-center\">\n        <div class=\"col-md-9\">\n            <div class=\"card\">\n                <header class=\"card-header\">                    \n                    <h5 class=\"card-title mt-2\"> <i class=\"fa fa-user\" aria-hidden=\"true\"></i> - Cadastro de Usuário</h5>\n                </header>\n                <article class=\"card-body\">\n                    <form [formGroup]=\"usuarioForm\" (ngSubmit)=\"createUser()\">\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-12\">\n                                <label>Nome</label>\n                                <input type=\"text\" class=\"form-control\" formControlName=\"nome\" placeholder=\"\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-12\">\n                                <label>E-mail</label>\n                                <input type=\"email\" class=\"form-control\" formControlName=\"email\" placeholder=\"\">\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"col form-group\">\n                                <label>Senha</label>\n                                <input type=\"password\" class=\"form-control\" formControlName=\"senha\" placeholder=\"\">\n                            </div>\n                            <div class=\"col form-group\">\n                                <label>Confirma senha</label>\n                                <input type=\"password\" class=\"form-control\" formControlName=\"confirmaSenha\" placeholder=\" \">\n                            </div>\n                        </div>\n\n                        <div class=\"form-row\">\n                            <div class=\"form-group col-md-6\">\n                                <label>Perfil</label>\n                                <select id=\"inputPerfil\" class=\"form-control\" formControlName=\"idPerfil\">\n                                    <option value=\"1\"selected=\"\">Atendimento</option>\n                                    <option value=\"2\" >Operação</option>\n                                    <option value=\"3\">Risco</option>\n                                    <option value=\"4\">Administrador</option>\n                                </select>\n                            </div>\n\n                            <div class=\"form-group col-md-6\">\n                                <label>Status</label>\n                                <select id=\"inputStatus\" class=\"form-control\" formControlName=\"status\">\n                                    <option value=\"1\" selected=\"\">Ativo</option>\n                                    <option value=\"2\">Inativo</option>\n                                    <option value=\"3\">Bloqueado</option>                                    \n                                </select>\n                            </div>\n                            \n\n                        </div>\n                        <div class=\"form-group col-md-12 text-right\">\n                            <button type=\"submit\" class=\"btn btn-primary btn-success\"> Salvar </button>\n                        </div>\n                    </form>\n                </article>\n            </div>\n        </div>\n\n    </div>\n\n\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/_model/empresa-filial-model.ts":
/*!************************************************!*\
  !*** ./src/app/_model/empresa-filial-model.ts ***!
  \************************************************/
/*! exports provided: EmpresaFilial */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaFilial", function() { return EmpresaFilial; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class EmpresaFilial {
    constructor(json) {
        this.codEmpresaDe = json.codEmpresaDe,
            this.codEmpresaPara = json.codEmpresaPara,
            this.codFilialDe = json.codFilialDe,
            this.codFilialPara = json.codFilialPara;
    }
}


/***/ }),

/***/ "./src/app/_service/averbacao-consulta-service.ts":
/*!********************************************************!*\
  !*** ./src/app/_service/averbacao-consulta-service.ts ***!
  \********************************************************/
/*! exports provided: AverbacaoConsultaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverbacaoConsultaService", function() { return AverbacaoConsultaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let AverbacaoConsultaService = class AverbacaoConsultaService {
    constructor(http) {
        this.http = http;
    }
    averbacaoByIdEmpresa(id) {
        debugger;
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_4__["CONSIGA_API"]}/api/ReguaComunicacao/getConsultarAprovacaoEmpresa/${id}/`)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
    ;
};
AverbacaoConsultaService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AverbacaoConsultaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AverbacaoConsultaService);



/***/ }),

/***/ "./src/app/_service/empresa-filial-service.ts":
/*!****************************************************!*\
  !*** ./src/app/_service/empresa-filial-service.ts ***!
  \****************************************************/
/*! exports provided: EmpresaFilialService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmpresaFilialService", function() { return EmpresaFilialService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");






let EmpresaFilialService = class EmpresaFilialService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
        };
    }
    incluirEmpresaFilial(empresaFilial) {
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_4__["CONSIGA_API"]}/api/ReguaComunicacao/copiarEmpresaFilial`, JSON.stringify(empresaFilial), this.httpOptions)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["retry"])(2), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError));
    }
    handleError(error) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        }
        else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["throwError"])(errorMessage);
    }
    ;
};
EmpresaFilialService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
EmpresaFilialService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], EmpresaFilialService);



/***/ }),

/***/ "./src/app/_service/login-service.ts":
/*!*******************************************!*\
  !*** ./src/app/_service/login-service.ts ***!
  \*******************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _app_api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.api */ "./src/app/app.api.ts");





let LoginService = class LoginService {
    constructor(http) {
        this.http = http;
        const headerSettings = {};
        this.header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"](headerSettings);
    }
    Login(email, senha) {
        debugger;
        return this.http.get(`${_app_api__WEBPACK_IMPORTED_MODULE_3__["CONSIGA_API"]}/api/ReguaComunicacao/getValidarUsuario/${email}/${senha}/`);
    }
    CreateUser(usuario) {
        const httpOptions = { headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' }) };
        return this.http.post(`${_app_api__WEBPACK_IMPORTED_MODULE_3__["CONSIGA_API"]}/api/ReguaComunicacao/gravarUsuario/`, usuario, httpOptions);
    }
};
LoginService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
LoginService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], LoginService);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _usuario_consulta_usuario_consulta_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./usuario-consulta/usuario-consulta.component */ "./src/app/usuario-consulta/usuario-consulta.component.ts");
/* harmony import */ var _averbacao_consulta_averbacao_consulta_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./averbacao-consulta/averbacao-consulta.component */ "./src/app/averbacao-consulta/averbacao-consulta.component.ts");
/* harmony import */ var _copiar_empresa_filial_copiar_empresa_filial_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./copiar-empresa-filial/copiar-empresa-filial.component */ "./src/app/copiar-empresa-filial/copiar-empresa-filial.component.ts");









const routes = [
    {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full',
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
        data: {
            title: 'Login'
        }
    },
    {
        path: 'dasboard',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
        data: {
            title: 'Dashboard'
        }
    },
    {
        path: 'usuario',
        component: _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_5__["UsuarioComponent"],
        data: {
            title: 'Usuario'
        }
    },
    {
        path: 'usuario-consulta',
        component: _usuario_consulta_usuario_consulta_component__WEBPACK_IMPORTED_MODULE_6__["UsuarioConsultaComponent"],
        data: {
            title: 'Consultar Usuario'
        }
    },
    {
        path: 'averbacao-consulta',
        component: _averbacao_consulta_averbacao_consulta_component__WEBPACK_IMPORTED_MODULE_7__["AverbacaoConsultaComponent"],
        data: {
            title: 'Consultar Averbacao'
        }
    },
    {
        path: 'cop-emp-fil',
        component: _copiar_empresa_filial_copiar_empresa_filial_component__WEBPACK_IMPORTED_MODULE_8__["CopiarEmpresaFilialComponent"],
        data: {
            title: 'Copiar Empresa Filial'
        }
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.api.ts":
/*!****************************!*\
  !*** ./src/app/app.api.ts ***!
  \****************************/
/*! exports provided: CONSIGA_API */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONSIGA_API", function() { return CONSIGA_API; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");


const CONSIGA_API = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].api;


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'portal-backoffice';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/alert */ "./node_modules/ngx-bootstrap/alert/fesm2015/ngx-bootstrap-alert.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./usuario/usuario.component */ "./src/app/usuario/usuario.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _usuario_consulta_usuario_consulta_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./usuario-consulta/usuario-consulta.component */ "./src/app/usuario-consulta/usuario-consulta.component.ts");
/* harmony import */ var _averbacao_consulta_averbacao_consulta_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./averbacao-consulta/averbacao-consulta.component */ "./src/app/averbacao-consulta/averbacao-consulta.component.ts");
/* harmony import */ var _copiar_empresa_filial_copiar_empresa_filial_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./copiar-empresa-filial/copiar-empresa-filial.component */ "./src/app/copiar-empresa-filial/copiar-empresa-filial.component.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");


















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _usuario_usuario_component__WEBPACK_IMPORTED_MODULE_11__["UsuarioComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["DashboardComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"],
            _usuario_consulta_usuario_consulta_component__WEBPACK_IMPORTED_MODULE_14__["UsuarioConsultaComponent"],
            _averbacao_consulta_averbacao_consulta_component__WEBPACK_IMPORTED_MODULE_15__["AverbacaoConsultaComponent"],
            _copiar_empresa_filial_copiar_empresa_filial_component__WEBPACK_IMPORTED_MODULE_16__["CopiarEmpresaFilialComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
            ngx_bootstrap_alert__WEBPACK_IMPORTED_MODULE_8__["AlertModule"].forRoot(),
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatMenuModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_17__["SharedModule"].forRoot(),
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/averbacao-consulta/averbacao-consulta.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/averbacao-consulta/averbacao-consulta.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F2ZXJiYWNhby1jb25zdWx0YS9hdmVyYmFjYW8tY29uc3VsdGEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/averbacao-consulta/averbacao-consulta.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/averbacao-consulta/averbacao-consulta.component.ts ***!
  \********************************************************************/
/*! exports provided: AverbacaoConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AverbacaoConsultaComponent", function() { return AverbacaoConsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _service_averbacao_consulta_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_service/averbacao-consulta-service */ "./src/app/_service/averbacao-consulta-service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let AverbacaoConsultaComponent = class AverbacaoConsultaComponent {
    constructor(averbacaoService, route, activeRouter) {
        this.averbacaoService = averbacaoService;
        this.route = route;
        this.activeRouter = activeRouter;
        this.averbacaoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            codigo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
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
AverbacaoConsultaComponent.ctorParameters = () => [
    { type: _service_averbacao_consulta_service__WEBPACK_IMPORTED_MODULE_2__["AverbacaoConsultaService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }
];
AverbacaoConsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-averbacao-consulta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./averbacao-consulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/averbacao-consulta/averbacao-consulta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./averbacao-consulta.component.css */ "./src/app/averbacao-consulta/averbacao-consulta.component.css")).default]
    })
], AverbacaoConsultaComponent);



/***/ }),

/***/ "./src/app/copiar-empresa-filial/copiar-empresa-filial.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/copiar-empresa-filial/copiar-empresa-filial.component.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcGlhci1lbXByZXNhLWZpbGlhbC9jb3BpYXItZW1wcmVzYS1maWxpYWwuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/copiar-empresa-filial/copiar-empresa-filial.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/copiar-empresa-filial/copiar-empresa-filial.component.ts ***!
  \**************************************************************************/
/*! exports provided: CopiarEmpresaFilialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopiarEmpresaFilialComponent", function() { return CopiarEmpresaFilialComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_empresa_filial_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/empresa-filial-service */ "./src/app/_service/empresa-filial-service.ts");
/* harmony import */ var _model_empresa_filial_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_model/empresa-filial-model */ "./src/app/_model/empresa-filial-model.ts");





let CopiarEmpresaFilialComponent = class CopiarEmpresaFilialComponent {
    constructor(service) {
        this.service = service;
        this.copiaEmpresaFilialForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            deEmpresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            paraEmpresa: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            deFilial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            paraFilial: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    copiar() {
        this.result = false;
        var emprefilial = new _model_empresa_filial_model__WEBPACK_IMPORTED_MODULE_4__["EmpresaFilial"]({
            'codEmpresaDe': this.copiaEmpresaFilialForm.value.deEmpresa,
            'codEmpresaPara': this.copiaEmpresaFilialForm.value.paraEmpresa,
            'codFilialDe': this.copiaEmpresaFilialForm.value.deFilial,
            'codFilialPara': this.copiaEmpresaFilialForm.value.paraFilial
        });
        debugger;
        return this.service.incluirEmpresaFilial(emprefilial)
            .subscribe(data => {
            this.result = data.copiado;
            this.copiaEmpresaFilialForm.reset();
            console.log(this.result);
        }, err => {
            console.log(err.error);
        });
    }
};
CopiarEmpresaFilialComponent.ctorParameters = () => [
    { type: _service_empresa_filial_service__WEBPACK_IMPORTED_MODULE_3__["EmpresaFilialService"] }
];
CopiarEmpresaFilialComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copiar-empresa-filial',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./copiar-empresa-filial.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/copiar-empresa-filial/copiar-empresa-filial.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./copiar-empresa-filial.component.css */ "./src/app/copiar-empresa-filial/copiar-empresa-filial.component.css")).default]
    })
], CopiarEmpresaFilialComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let DashboardComponent = class DashboardComponent {
    constructor() { }
    ngOnInit() {
    }
};
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() { }
    ngOnInit() {
    }
};
HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
    })
], HeaderComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".login-form {\n    width: 500px;\n    margin: 50px auto;\n}\n\n.login-form form {\n    margin-bottom: 15px;\n    background: #f7f7f7;\n    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n    padding: 30px;\n}\n\n.login-form h2 {\n    margin: 0 0 15px;\n}\n\n.login-form a {\n    margin: 0 0 25px;\n}\n\n.form-control,\n.btn {\n    min-height: 38px;\n    border-radius: 2px;\n}\n\n.btn {\n    font-size: 15px;\n    font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLDBDQUEwQztJQUMxQyxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksZ0JBQWdCO0FBQ3BCOztBQUVBOztJQUVJLGdCQUFnQjtJQUNoQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbi1mb3JtIHtcbiAgICB3aWR0aDogNTAwcHg7XG4gICAgbWFyZ2luOiA1MHB4IGF1dG87XG59XG5cbi5sb2dpbi1mb3JtIGZvcm0ge1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgYmFja2dyb3VuZDogI2Y3ZjdmNztcbiAgICBib3gtc2hhZG93OiAwcHggMnB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgcGFkZGluZzogMzBweDtcbn1cblxuLmxvZ2luLWZvcm0gaDIge1xuICAgIG1hcmdpbjogMCAwIDE1cHg7XG59XG5cbi5sb2dpbi1mb3JtIGEge1xuICAgIG1hcmdpbjogMCAwIDI1cHg7XG59XG5cbi5mb3JtLWNvbnRyb2wsXG4uYnRuIHtcbiAgICBtaW4taGVpZ2h0OiAzOHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcbn1cblxuLmJ0biB7XG4gICAgZm9udC1zaXplOiAxNXB4O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/login-service */ "./src/app/_service/login-service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(router, LoginService) {
        this.router = router;
        this.LoginService = LoginService;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    login() {
        this.LoginService.Login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(data => {
            console.log(data);
            if (data != null) {
                this.loginForm.reset();
                this.router.navigate(['/dasboard']);
            }
            else {
                this.loginForm.reset();
                alert('Usuário ou senha inválidos');
            }
        }, error => {
            this.errorMessage = error.message;
        });
    }
    ;
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../_service/login-service */ "./src/app/_service/login-service.ts");
/* harmony import */ var _service_averbacao_consulta_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../_service/averbacao-consulta-service */ "./src/app/_service/averbacao-consulta-service.ts");
/* harmony import */ var _service_empresa_filial_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../_service/empresa-filial-service */ "./src/app/_service/empresa-filial-service.ts");
var SharedModule_1;







let SharedModule = SharedModule_1 = class SharedModule {
    static forRoot() {
        return {
            ngModule: SharedModule_1,
            providers: [
                _service_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"],
                _service_averbacao_consulta_service__WEBPACK_IMPORTED_MODULE_5__["AverbacaoConsultaService"],
                _service_empresa_filial_service__WEBPACK_IMPORTED_MODULE_6__["EmpresaFilialService"],
            ]
        };
    }
};
SharedModule = SharedModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ],
        exports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]
        ]
    })
], SharedModule);



/***/ }),

/***/ "./src/app/usuario-consulta/usuario-consulta.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/usuario-consulta/usuario-consulta.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8tY29uc3VsdGEvdXN1YXJpby1jb25zdWx0YS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/usuario-consulta/usuario-consulta.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/usuario-consulta/usuario-consulta.component.ts ***!
  \****************************************************************/
/*! exports provided: UsuarioConsultaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioConsultaComponent", function() { return UsuarioConsultaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let UsuarioConsultaComponent = class UsuarioConsultaComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsuarioConsultaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario-consulta',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario-consulta.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario-consulta/usuario-consulta.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario-consulta.component.css */ "./src/app/usuario-consulta/usuario-consulta.component.css")).default]
    })
], UsuarioConsultaComponent);



/***/ }),

/***/ "./src/app/usuario/usuario.component.css":
/*!***********************************************!*\
  !*** ./src/app/usuario/usuario.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzdWFyaW8vdXN1YXJpby5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/usuario/usuario.component.ts":
/*!**********************************************!*\
  !*** ./src/app/usuario/usuario.component.ts ***!
  \**********************************************/
/*! exports provided: UsuarioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsuarioComponent", function() { return UsuarioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _service_login_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../_service/login-service */ "./src/app/_service/login-service.ts");




let UsuarioComponent = class UsuarioComponent {
    constructor(loginService) {
        this.loginService = loginService;
        this.data = false;
        this.usuarioForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            nome: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            senha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            confirmaSenha: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            idPerfil: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
            status: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
    createUser(usuario) {
        debugger;
        this.usuarioForm.reset();
        //  this.loginService.CreateUser(usuario).subscribe(
        //    () => {
        //      this.data = true;
        //      this.massage = 'Data saved Successfully';
        //      this.UserForm.reset();
        //    });
    }
};
UsuarioComponent.ctorParameters = () => [
    { type: _service_login_service__WEBPACK_IMPORTED_MODULE_3__["LoginService"] }
];
UsuarioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-usuario',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./usuario.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/usuario/usuario.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./usuario.component.css */ "./src/app/usuario/usuario.component.css")).default]
    })
], UsuarioComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const environment = {
    production: false,
    //api: 'https://consigamaisreguacomunicacaoapi.azurewebsites.net'
    //api: 'https://localhost:44315'
    api: 'http://localhost:5000'
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/nilton/Projetos/ConsigaMais/front-end/ConsigaMais-Portal-BackOffice/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map