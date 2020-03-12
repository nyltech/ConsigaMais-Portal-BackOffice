import { Validacoes } from './valicacoes';
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

  usuarioForm: FormGroup;

  constructor(private loginService: LoginService,
              private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createUser() {

    console.log(this.usuarioForm);

    this.loginService.CreateUser(this.usuarioForm.value).subscribe(
      () => {
        this.data = true;
        this.msg = 'Usuário salvo com sucesso!';
        this.usuarioForm.reset();
        alert(this.msg);
      });
  }

  createForm(){
    this.usuarioForm = this.fb.group({
      nome: [
              '',
              Validators.compose([
              Validators.required,
              Validators.minLength(3),
              Validators.maxLength(100)
        ])
      ],
      email: ['', Validators.compose([Validators.email])],
      senha: ['', Validators.compose([Validators.required])],
      confirmaSenha: ['', Validators.compose([Validators.required])],
      idPerfil: ['', Validators.compose([Validators.required])],      
      status: ['', Validators.compose([Validators.required])]
    },
      {
        validator: Validacoes.SenhasCombinam
      }
    );
  }

  get nome() {
    return this.usuarioForm.get('nome');
  }

  get email() {
    return this.usuarioForm.get('email');
  }

  get senha() {
    return this.usuarioForm.get('senha');
  }

  get confirmaSenha() {
    return this.usuarioForm.get('confirmaSenha');
  }

  get idPerfil() {
    return this.usuarioForm.get('idPerfil');
  }

  get status() {
    return this.usuarioForm.get('status');
  }
 


}
