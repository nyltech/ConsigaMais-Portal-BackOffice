import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { NgForm, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';


import { Usuario } from '../_model/usuario-model';
import { LoginService } from '../_service/login-service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {

  data = false;  
  msg: string;

  usuarioForm = new FormGroup({
    nome: new FormControl(''),
    email: new FormControl(''),
    senha: new FormControl(''),
    confirmaSenha: new FormControl(''),
    idPerfil: new FormControl(''),
    status: new FormControl(''),

  });

  constructor(private loginService: LoginService) { }

  ngOnInit() {

  }

  createUser() {

    console.log(this.usuarioForm.value);

    this.loginService.CreateUser(this.usuarioForm.value).subscribe(
      () => {
        this.data = true;
        this.msg = 'Usuário salvo com sucesso!';
        this.usuarioForm.reset();
        alert(this.msg);
      });

    

  }


}
