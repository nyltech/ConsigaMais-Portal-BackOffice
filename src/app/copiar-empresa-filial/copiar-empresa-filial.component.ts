import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { EmpresaFilialService } from '../_service/empresa-filial-service';
import { EmpresaFilial } from '../_model/empresa-filial-model';

@Component({
  selector: 'app-copiar-empresa-filial',
  templateUrl: './copiar-empresa-filial.component.html',
  styleUrls: ['./copiar-empresa-filial.component.css']
})
export class CopiarEmpresaFilialComponent implements OnInit {

  result: any;
  emprefilial: EmpresaFilial;

  copiaEmpresaFilialForm = new FormGroup({

    deEmpresa: new FormControl(''),
    paraEmpresa: new FormControl(''),
    deFilial: new FormControl(''),
    paraFilial: new FormControl(''),

  });

  constructor(private service: EmpresaFilialService) { }

  ngOnInit() {
  }

  copiar() {
    this.result = false;
    
    var emprefilial = new EmpresaFilial(
      {
        'codEmpresaDe': this.copiaEmpresaFilialForm.value.deEmpresa,
        'codEmpresaPara': this.copiaEmpresaFilialForm.value.paraEmpresa,
        'codFilialDe': this.copiaEmpresaFilialForm.value.deFilial,
        'codFilialPara': this.copiaEmpresaFilialForm.value.paraFilial
      });
          
    debugger
    return this.service.incluirEmpresaFilial(emprefilial)
      .subscribe(data => {
        this.result = data.copiado;
        
        console.log(this.result);
      },
        err => {
          console.log(err.error);
        });

  }


}
