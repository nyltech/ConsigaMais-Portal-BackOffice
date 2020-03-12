import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_service/login-service';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  
  loginForm: FormGroup;

  constructor(private router: Router,
              private loginService: LoginService,
              private fb: FormBuilder) { }

  ngOnInit() {
   this.createForm();
  }

  login(): void {

    this.loginService.Login(this.loginForm.value.email, this.loginForm.value.senha).subscribe(
      data => {
        console.log(data);
        if (data != null) {
          localStorage.setItem('idPerfil', data.idPerfil.toString());
          this.loginForm.reset();
          this.router.navigate(['/dasboard']);
        }
        else {          
          this.loginForm.reset();
          alert('Usuário ou senha inválidos');
        }
      },
      error => {
        this.errorMessage = error.message;
      });
  };

  createForm(): void {
    this.loginForm = this.fb.group({
      email:['', Validators.compose([Validators.email])],
      senha: ['', Validators.compose([Validators.required])]
    })
  }

  get email() {
    return this.loginForm.get('email');
  }

  get senha() {
    return this.loginForm.get('senha');
  }



}
