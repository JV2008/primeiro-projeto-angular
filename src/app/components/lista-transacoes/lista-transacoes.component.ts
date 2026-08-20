import { Component, input, output, EventEmitter } from '@angular/core';
import { Transacao } from '../../models/transacao';

@Component({
  selector: 'app-lista-transacoes',
  standalone: true,
  imports: [],
  templateUrl: './lista-transacoes.component.html',
  styleUrl: './lista-transacoes.component.css',
})
export class ListaTransacoesComponent {
  transacoes = input.required<Transacao[]>();
  remover = output<number>();

  excluir(id: number) {
    this.remover.emit(id);
  }
}
