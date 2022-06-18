import { PaginacaoResponse } from 'src/shared/api/responses/paginacao.response';
import { PaginacaoPadraoGrid } from 'src/shared/grids/paginacao-padrao.grid';
import { computed, ref } from 'vue';

const paginacaoGrid = ref(PaginacaoPadraoGrid);
const itemSelecionado = ref();
const registroSelecionado = computed(() => itemSelecionado);

const atualizarDadosPaginacao = (resposta: PaginacaoResponse<unknown>) => {
  const paginaApi = resposta.number;
  paginacaoGrid.value.page = paginaApi + 1;
  paginacaoGrid.value.rowsPerPage = resposta.size;
  paginacaoGrid.value.rowsNumber = resposta.totalElements;
};

export {
  paginacaoGrid,
  itemSelecionado,
  registroSelecionado,
  atualizarDadosPaginacao,
};
