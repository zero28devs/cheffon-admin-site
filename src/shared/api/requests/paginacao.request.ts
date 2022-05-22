import { Request } from 'src/shared/api/requests/request';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export abstract class PaginacaoRequest extends Request {
  page?: number;
  perPage?: number;

  constructor(paginacao: PaginacaoGrid) {
    super();
    this.page = paginacao.page;
    this.perPage = paginacao.rowsNumber;
  }
}
