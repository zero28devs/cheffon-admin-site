import { ListarTagRequest } from 'src/api/tags/requests/listar-tag.request';
import { Request } from 'src/shared/api/requests/request';
import { Formulario } from 'src/shared/formularios/formulario';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export class ListarTagFiltroFormulario implements Formulario {
  nome?: string;

  constructor(params: Partial<ListarTagFiltroFormulario>) {
    this.nome = params.nome;
  }

  gerarRequest(paginacao: PaginacaoGrid): Request {
    console.log(paginacao);
    return new ListarTagRequest(
      {
        nome: this.nome,
      },
      paginacao
    );
  }
}
