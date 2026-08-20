import { Component, input, output, EventEmitter } from '@angular/core';
import { Transacao } from '../../models/transacao';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista-transacoes',
  standalone: true,
  imports: [CommonModule],
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
