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

  async listar(request: ListarTagRequest) {
    return await this.apiClient.get<PaginacaoResponse<TagResponse>>(this.url, {
      params: request,
    });
  }
}
