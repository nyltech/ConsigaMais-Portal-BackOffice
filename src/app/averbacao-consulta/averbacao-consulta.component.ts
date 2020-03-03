import { Component, OnInit } from '@angular/core';
import { AverbacaoConsultaService } from '../_service/averbacao-consulta-service';
import { ActivatedRoute, Router } from '@angular/router';
import { Averbacao } from '../_model/averbacao-model';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-averbacao-consulta',
  templateUrl: './averbacao-consulta.component.html',
  styleUrls: ['./averbacao-consulta.component.css']
})
export class AverbacaoConsultaComponent implements OnInit {

  averbacaoForm = new FormGroup({
    codigo: new FormControl(''),
  });

  public averbacao: Averbacao;

  constructor(private averbacaoService: AverbacaoConsultaService,
    private route: Router,
    private activeRouter: ActivatedRoute) { }

  ngOnInit() {
  }
  
  public returnUrl: any;
  public mensagem: any;

  consultar() {
    console.log(this.averbacaoForm);
    
    return this.averbacaoService.averbacaoByIdEmpresa(this.averbacaoForm.value.codigo)
      .subscribe(
        data => {
          // essa linha será executada no caso de retorno sem erros         
          this.averbacao = data;
          console.log(this.averbacao);
          // if (this.returnUrl == null) {
          //   this.route.navigate(['/']);
          // } else {
          //   this.route.navigate([this.returnUrl]);
          // }
        },
        err => {
          console.log(err.error);
          this.mensagem = err.error;
        }
      );
  }

  



}
