import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { from, Observable } from 'rxjs';

import { Usuario } from '../_model/usuario-model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  Url: string;
  token: string;
  header: any;

  constructor(private http: HttpClient) {

    this.Url = 'URL da API';

    const headerSettings: { [name: string]: string | string[]; } = {};
    this.header = new HttpHeaders(headerSettings);

  }

  Login(model: any) {
    debugger;
    var a = this.Url + 'UserLogin';
    return this.http.post<any>(this.Url + 'UserLogin', model, { headers: this.header });
  }

  CreateUser(usuario: Usuario) {

    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this.http.post<Usuario[]>(this.Url + '/createcontact/', usuario, httpOptions)
  }

}
