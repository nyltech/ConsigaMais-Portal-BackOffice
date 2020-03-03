export class EmpresaFilial {
 
    constructor( json: any) {
      this.codEmpresaDe = json.codEmpresaDe,
      this.codEmpresaPara = json.codEmpresaPara,
      this.codFilialDe = json.codFilialDe,
      this.codFilialPara = json.codFilialPara
    }
  
      codEmpresaDe: number 
      codEmpresaPara: number  
      codFilialDe: number  
      codFilialPara: number     
  
    }