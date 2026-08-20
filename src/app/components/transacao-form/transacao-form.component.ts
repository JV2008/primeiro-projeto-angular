import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TransacaoService } from '../../services/transacao.service';
import { Transacao } from '../../models/transacao';

@Component({
  selector: 'app-transacao-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './transacao-form.component.html',
  styleUrl: './transacao-form.component.css',
})
export class TransacaoFormComponent {
  descricao = '';
  valor = '';
  tipo: 'entrada' | 'saida' = 'entrada';
  data = '';

  constructor(private readonly transacaoService: TransacaoService) {}

  enviar() {
    if (!this.descricao || !this.valor || !this.data) return;
    const numeroValor = parseFloat(this.valor);
    if (isNaN(numeroValor)) return;

    this.transacaoService.adicionar({
      id: Date.now(),
      descricao: this.descricao,
      valor: numeroValor,
      tipo: this.tipo,
      data: this.data,
    });

    this.descricao = '';
    this.valor = '';
    this.tipo = 'entrada';
    this.data = '';
  }
}
