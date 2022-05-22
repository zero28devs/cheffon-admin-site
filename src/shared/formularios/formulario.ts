import { Request } from 'src/shared/api/requests/request';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export interface Formulario {
  gerarRequest(paginacao: PaginacaoGrid): Request;
}
