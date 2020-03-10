import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { retry, catchError } from 'rxjs/operators';

import { CONSIGA_API } from '../app.api'
import { Observable, throwError } from 'rxjs';
import { Averbacao } from '../_model/averbacao-model';

@Injectable()
export class AverbacaoConsultaService {

  constructor(private http: HttpClient) { }

  averbacaoByIdEmpresa(id: number): Observable<Averbacao> {
    debugger
    return this.http.get<Averbacao>(`${CONSIGA_API}/api/ReguaComunicacao/getConsultarAprovacaoEmpresa/${id}/`)
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
