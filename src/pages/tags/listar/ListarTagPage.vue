<template>
  <q-page class="column items-center">
    <breadcrumb :itens="listarTagsBreadcrump"></breadcrumb>
    <q-card flat bordered class="card-filtro mt-2">
      <q-card-section>
        <div class="text-h6 text-dark">Filtros</div>
      </q-card-section>
      <q-card-section class="q-pt-none campos-filtro">
        <div class="row">
          <q-input
            outlined
            v-model="formulario.nome"
            label="Nome"
            class="col-md-4"
          />
        </div>
      </q-card-section>
      <q-separator inset />
      <q-card-section class="q-pt-none row justify-end">
        <div class="botoes-filtro">
          <q-btn
            no-caps
            color="dark"
            label="Limpar campos"
            @click="limparFormulario"
          ></q-btn>
          <q-btn
            class="botao-pesquisar"
            no-caps
            color="primary"
            label="Pesquisar"
            @click="pesquisar"
          ></q-btn>
        </div>
      </q-card-section>
    </q-card>
    <q-card flat bordered class="card-dados mt-2">
      <q-card-section>
        <div class="text-h6 text-dark">Tags</div>
        <div class="botoes-acoes">
          <q-btn
            no-caps
            color="primary"
            label="Cadastrar"
            @click="navegarParaCadastro"
          ></q-btn>
          <q-btn
            v-if="registroSelecionado"
            no-caps
            color="secondary"
            label="Editar"
            @click="navegarParaEdicao"
          ></q-btn>
          <q-btn
            v-if="registroSelecionado"
            no-caps
            color="negative"
            label="Remover"
          ></q-btn>
        </div>
        <div class="tabela-dados">
          <q-table
            @request="pesquisar"
            v-model:selected="tagSelecionada"
            v-model:pagination="paginacaoGrid"
            :loading="loading"
            :rows="tags"
            :columns="grid"
            row-key="id"
            selection="single"
            flat
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { computed, defineComponent, onMounted, ref } from 'vue';
import router from 'src/router';
import Breadcrumb from 'src/components/Breadcrumb.vue';
import { TagService } from 'src/api/tags/services/tag.service';
import { listarTagsBreadcrump } from 'src/pages/tags/listar/listar-tag.breadcrump';
import { ListarTagFiltroFormulario } from 'src/pages/tags/listar/formularios/listar-tag-filtro.formulario';
import { ListarTagGrid } from 'src/pages/tags/listar/grids/listar-tag.grid';
import { PaginacaoPadraoGrid } from 'src/shared/grids/paginacao-padrao.grid';
import { TagResponse } from 'src/api/tags/responses/tag.response';
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';

export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const formulario = ref(new ListarTagFiltroFormulario({}));
    const grid = ListarTagGrid;
    const loading = ref(false);
    const tagSelecionada = ref();

    const paginacaoGrid = ref(PaginacaoPadraoGrid);
    const tags = ref<TagResponse[]>([]);

    const registroSelecionado = computed(() => tagSelecionada);

    const toggleLoading = () => (loading.value = !loading.value);

    const limparFormulario = () =>
      (formulario.value = new ListarTagFiltroFormulario({}));

    const pesquisar = async (props: { pagination: PaginacaoGrid }) => {
      toggleLoading();
      const tagService = new TagService();
      const request = formulario.value.gerarRequest(props.pagination);
      const resposta = await tagService.listar(request);
      tags.value = resposta.content;

      paginacaoGrid.value.page = resposta.number + 1;
      paginacaoGrid.value.rowsPerPage = resposta.size;
      paginacaoGrid.value.rowsNumber = resposta.totalElements;

      toggleLoading();
    };

    const navegarParaCadastro = () => router.push('/tags/cadastrar');

    const navegarParaEdicao = async () => {
      const tagEdicao = tagSelecionada.value as TagResponse;
      router.push(`/tags/editar/${tagEdicao.id}`);
    };

    onMounted(async () => {
      await pesquisar({ pagination: PaginacaoPadraoGrid });
    });

    return {
      listarTagsBreadcrump,
      formulario,
      grid,
      loading,
      paginacaoGrid,
      tags,
      tagSelecionada,
      registroSelecionado,
      limparFormulario,
      pesquisar,
      navegarParaCadastro,
      navegarParaEdicao,
    };
  },
});
</script>
