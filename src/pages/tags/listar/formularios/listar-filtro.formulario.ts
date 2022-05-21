import { ListarTagRequest } from 'src/api/tags/requests/listar-tag.request';
import { Request } from 'src/shared/api/requests/request';
import { Formulario } from 'src/shared/formularios/formulario';

export class ListarFiltroFormulario implements Formulario {
  nome?: string;

  constructor(params: Partial<ListarFiltroFormulario>) {
    this.nome = params.nome;
  }

  gerarRequest(): Request {
    return new ListarTagRequest({
      nome: this.nome,
    });
  }
}
