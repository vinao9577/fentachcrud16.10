import { Injectable } from '@angular/core';
import { Cliente } from '../model/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor() { }

  listar():Cliente[]{
    return[
      {id:1,cpf:"12345678988",nome:"Ana",sobrenome:"Silva",dataNascimento:"13-04-2007",email:"teupai@gmail.com"},
      {id:2,cpf:"12345678988",nome:"Carlos",sobrenome:"Menezes",dataNascimento:"25-11-2006",email:"teupai@gmail.com"}
  ];
    
  }
}
