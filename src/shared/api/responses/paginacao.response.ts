export abstract class PaginacaoResponse<T> {
  content: T[];
  totalPages: number;
  totalElements: number;
  size: number;
  number: number;

  constructor(params: PaginacaoResponse<T>) {
    this.content = params.content;
    this.totalPages = params.totalPages;
    this.totalElements = params.totalElements;
    this.size = params.size;
    this.number = params.number;
  }
}
