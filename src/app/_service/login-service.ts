import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { Usuario } from '../_model/usuario-model';
import { CONSIGA_API } from '../app.api';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  token: string;
  header: any;

  constructor(private http: HttpClient) {
    
    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  Login(email: string, senha: string) {
    debugger;    
    return this.http.get<Usuario>(`${CONSIGA_API}/api/ReguaComunicacao/getValidarUsuario/${email}/${senha}/`);
  }

  // CreateUser(usuario: Usuario) {

  //   const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
  //   return this.http.post<Usuario[]>(this.Url + '/createcontact/', usuario, httpOptions)
  // }

}
