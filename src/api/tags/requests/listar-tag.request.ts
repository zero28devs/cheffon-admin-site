import { PaginacaoRequest } from 'src/shared/api/requests/paginacao.request';
import { PaginacaoPadraoGrid } from 'src/shared/grids/paginacao-padrao.grid';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export class ListarTagRequest extends PaginacaoRequest {
  nome?: string;

  constructor(
    params: Partial<ListarTagRequest>,
    paginacao: PaginacaoGrid = PaginacaoPadraoGrid
  ) {
    super(paginacao);
    this.nome = params.nome;
  }
}
