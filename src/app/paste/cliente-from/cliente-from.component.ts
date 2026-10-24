import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cliente-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-from.component.html',
  styleUrl: './cliente-from.component.css'
})
export class ClienteFromComponent {
  cliente = {
    cpf: '',
    nome: '',
    sobrenome: '',
    dataNascimento: '',
    email: '',
    senha: '',
    confirmarSenha: ''
  };
  cadastrar() {
    if (this.cliente.senha !== this.cliente.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }
    alert(`Cliente ${this.cliente.nome} cadastrado com sucesso!`);
    console.log(this.cliente);

  }
}
