import { PaginacaoRequest } from 'src/shared/api/requests/paginacao.request';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export class ListarTagRequest extends PaginacaoRequest {
  nome?: string;

  constructor(
    params: Partial<ListarTagRequest>,
    paginacao: PaginacaoGrid = new PaginacaoGrid({})
  ) {
    super(paginacao);
    this.nome = params.nome;
  }
}
