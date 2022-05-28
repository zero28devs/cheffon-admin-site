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
          <q-btn no-caps color="secondary" label="Limpar campos"></q-btn>
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
        <div class="tabela-dados">
          <q-table
            :loading="loading"
            :rows="tags"
            :columns="grid"
            :paginacao="paginacao"
            row-key="id"
          />
        </div>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';
import Breadcrumb from 'src/components/Breadcrumb.vue';
import { TagService } from 'src/api/tags/services/tag.service';
import { listarTagsBreadcrump } from 'src/pages/tags/listar/listar-tag.breadcrump';
import { ListarTagFiltroFormulario } from 'src/pages/tags/listar/formularios/listar-tag-filtro.formulario';
import { ListarTagGrid } from 'src/pages/tags/listar/grids/listar-tag.grid';
import { PaginacaoPadraoGrid } from 'src/shared/grids/paginacao-padrao.grid';
import { TagResponse } from 'src/api/tags/responses/tag.response';
import { PaginacaoResponse } from 'src/shared/api/responses/paginacao.response';

export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const formulario = ref(new ListarTagFiltroFormulario({}));
    const grid = ListarTagGrid;
    const loading = ref(false);

    const paginacaoGrid = PaginacaoPadraoGrid;
    const tags = ref<TagResponse[]>([]);

    const toggleLoading = () => (loading.value = !loading.value);

    const pesquisar = async () => {
      toggleLoading();
      const tagService = new TagService();
      const request = formulario.value.gerarRequest(paginacaoGrid);
      const resposta = await tagService.listar(request);
      tags.value = resposta.content;
      toggleLoading();
    };

    onMounted(async () => {
      await pesquisar();
    });

    return {
      listarTagsBreadcrump,
      formulario,
      grid,
      loading,
      paginacaoGrid,
      pesquisar,
      tags,
    };
  },
});
</script>
