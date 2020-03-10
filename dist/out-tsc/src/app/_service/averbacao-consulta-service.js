import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { CONSIGA_API } from '../app.api';
import { throwError } from 'rxjs';
let AverbacaoConsultaService = class AverbacaoConsultaService {
    constructor(http) {
        this.http = http;
    }
    averbacaoByIdEmpresa(id) {
        return this.http.get(`${CONSIGA_API}/api/ReguaComunicacao/getConsultarAprovacaoEmpresa/${id}/`)
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
AverbacaoConsultaService = tslib_1.__decorate([
    Injectable()
], AverbacaoConsultaService);
export { AverbacaoConsultaService };
//# sourceMappingURL=averbacao-consulta-service.js.map