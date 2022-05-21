import { Request } from 'src/shared/api/requests/request';

export class ListarTagRequest extends Request {
  nome?: string;

  constructor(params: Partial<ListarTagRequest>) {
    super();
    this.nome = params.nome;
  }
}
