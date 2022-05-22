export abstract class PaginacaoResponse<T> {
  content: T[];

  constructor(params: PaginacaoResponse<T>) {
    this.content = params.content;
  }
}
