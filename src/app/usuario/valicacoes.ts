import { AbstractControl } from '@angular/forms';


export class Validacoes {

    static SenhasCombinam(controle: AbstractControl) {
        let senha = controle.get('senha').value;
        let confirmarSenha = controle.get('confirmaSenha').value;
    
        if (senha === confirmarSenha) return null;
    
        controle.get('confirmaSenha').setErrors({ senhasNaoCoincidem: true });
      }

}