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
  UserForm: any;
  massage: string;

  constructor(private loginService: LoginService) { }

  ngOnInit() {
    // this.UserForm = this.formbulider.group({
    //   UserName: ['', [Validators.required]],
    //   LoginName: ['', [Validators.required]],
    //   Password: ['', [Validators.required]],
    //   Email: ['', [Validators.required]],
    //   ContactNo: ['', [Validators.required]],
    //   Address: ['', [Validators.required]],
    // });
  }

  // onFormSubmit() {
  //   const user = this.UserForm.value;
  //   this.Createemployee(user);
  // }

  // Createemployee(register: Usuario) {
  //   this.loginService.CreateUser(register).subscribe(
  //     () => {
  //       this.data = true;
  //       this.massage = 'Data saved Successfully';
  //       this.UserForm.reset();
  //     });
  // }


}
