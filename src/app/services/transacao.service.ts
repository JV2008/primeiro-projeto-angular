import { Injectable, signal } from '@angular/core';
import { Transacao } from '../models/transacao';

@Injectable({ providedIn: 'root' })
export class TransacaoService {
  private readonly _transacoes = signal<Transacao[]>([]);
  readonly transacoes = this._transacoes.asReadonly();

  adicionar(transacao: Transacao) {
    this._transacoes.update(lista => [...lista, transacao]);
  }

  remover(id: number) {
    this._transacoes.update(lista => lista.filter(t => t.id !== id));
  }
}
