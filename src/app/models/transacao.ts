export interface Transacao {
  id: number;
  descricao: string;
  valor: number;
  tipo: 'entrada' | 'saida';
  data: string;
}
