import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../../model/cliente';
import { ClienteService } from '../../services/cliente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cliente-from',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cliente-from.component.html',
  styleUrl: './cliente-from.component.css'
})
export class ClienteFromComponent {
  cliente: Cliente = {} as Cliente;
  confirmarSenha: String = ""

  private service = inject(ClienteService);
  private router = inject(Router);

  salvar() {

    if (this.cliente.senha !== this.confirmarSenha) {
      alert('As senhas não são iguais.');
      return;
    }

    this.service.incluir(this.cliente).subscribe({
      next: (cliente)=> {
        alert(`Cliente ${cliente.nome} criado com id ${cliente.id}`)
        this.router.navigate(["/admin-clientes-listar"])
      }
    })
  }
}
