import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';

import { CONGIGA_API } from '../app.api'

import { EmpresaFilial } from '../_model/empresa-filial-model';
import { Observable, throwError } from 'rxjs';


@Injectable()
export class EmpresaFilialService {

    constructor(private http: HttpClient) { }

    httpOptions = {
        headers: new HttpHeaders({ 'Content-Type': 'application/json' })
    }
    
    incluirEmpresaFilial(empresaFilial: EmpresaFilial): Observable<any> {


        return this.http.post<EmpresaFilial>(`${CONGIGA_API}/api/ReguaComunicacao/copiarEmpresaFilial`, JSON.stringify(empresaFilial), this.httpOptions)
            .pipe(
                retry(2),
                catchError(this.handleError)
            )

    }


    handleError(error: HttpErrorResponse) {
        let errorMessage = '';
        if (error.error instanceof ErrorEvent) {
            // Erro ocorreu no lado do client
            errorMessage = error.error.message;
        } else {
            // Erro ocorreu no lado do servidor
            errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    };



}
