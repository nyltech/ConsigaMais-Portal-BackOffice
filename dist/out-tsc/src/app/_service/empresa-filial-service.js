import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpHeaders } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';
import { CONSIGA_API } from '../app.api';
import { EmpresaFilial } from '../_model/empresa-filial-model';
import { throwError } from 'rxjs';
let EmpresaFilialService = class EmpresaFilialService {
    constructor(http) {
        this.http = http;
        this.httpOptions = {
            headers: new HttpHeaders({ 'Content-Type': 'application/json' })
        };
    }
    incluirEmpresaFilial(empresaFilial) {
        console.log(empresaFilial);
        return this.http.post(`${CONSIGA_API}/api/ReguaComunicacao/copiarEmpresaFilial`, JSON.stringify(EmpresaFilial))
            .pipe(retry(2), catchError(this.handleError));
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
        return throwError(errorMessage);
    }
    ;
};
EmpresaFilialService = tslib_1.__decorate([
    Injectable()
], EmpresaFilialService);
export { EmpresaFilialService };
//# sourceMappingURL=empresa-filial-service.js.map