import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../_service/login-service';
import { FormGroup, FormControl } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  errorMessage: string;
  
  loginForm = new FormGroup({
    email: new FormControl(''),
    senha: new FormControl(''),
  });

  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit() {
   
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

}
