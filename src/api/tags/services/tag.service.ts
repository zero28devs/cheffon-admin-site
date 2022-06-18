import { ListarTagRequest } from 'src/api/tags/requests/listar-tag.request';
import { TagResponse } from 'src/api/tags/responses/tag.response';
import ApiClient from 'src/shared/api/client/api.client';
import { PaginacaoResponse } from 'src/shared/api/responses/paginacao.response';

export class TagService {
  private apiClient: ApiClient;
  private url = 'tags';

  constructor() {
    this.apiClient = new ApiClient();
  }

  listar(request: ListarTagRequest) {
    return this.apiClient.get<PaginacaoResponse<TagResponse>>(this.url, {
      params: request,
    });
  }

  excluir(codigo: number) {
    return this.apiClient.delete<void>(`${this.url}/${codigo}`);
  }
}
