import { Request } from 'src/shared/api/requests/request';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export abstract class PaginacaoRequest extends Request {
  page?: number;
  size?: number;

  constructor(paginacao: PaginacaoGrid) {
    super();
    const paginaApi = paginacao.page - 1;
    this.page = paginaApi;
    this.size = paginacao.rowsPerPage;
  }
}
