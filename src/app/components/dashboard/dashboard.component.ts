import { Component } from '@angular/core';
import { TransacaoService } from '../../services/transacao.service';
import { TransacaoFormComponent } from '../transacao-form/transacao-form.component';
import { PainelResumoComponent } from '../painel-resumo/painel-resumo.component';
import { ListaTransacoesComponent } from '../lista-transacoes/lista-transacoes.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TransacaoFormComponent, PainelResumoComponent, ListaTransacoesComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  constructor(public readonly transacaoService: TransacaoService) {}

  remover(id: number) {
    this.transacaoService.remover(id);
  }
}
