import { Component, input } from '@angular/core';
import { Transacao } from '../../models/transacao';

@Component({
  selector: 'app-painel-resumo',
  standalone: true,
  imports: [],
  templateUrl: './painel-resumo.component.html',
  styleUrl: './painel-resumo.component.css',
})
export class PainelResumoComponent {
  transacoes = input.required<Transacao[]>();

  get saldo() {
    return this.transacoes().reduce((acc, t) => acc + (t.tipo === 'entrada' ? t.valor : -t.valor), 0);
  }

  get entradas() {
    return this.transacoes().filter(t => t.tipo === 'entrada').reduce((acc, t) => acc + t.valor, 0);
  }

  get saidas() {
    return this.transacoes().filter(t => t.tipo === 'saida').reduce((acc, t) => acc + t.valor, 0);
  }
}
