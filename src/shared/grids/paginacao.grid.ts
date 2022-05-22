export class PaginacaoGrid {
  sortBy?: string;
  descending?: boolean;
  page?: number;
  rowsPerPage?: number;
  rowsNumber?: number;

  constructor(params: Partial<PaginacaoGrid>) {
    this.sortBy = params.sortBy;
    this.descending = params.descending;
    this.page = params.page;
    this.rowsPerPage = params.rowsPerPage;
    this.rowsNumber = params.rowsNumber;
  }
}
