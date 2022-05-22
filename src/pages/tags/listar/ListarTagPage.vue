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
        <q-table
          class="tabela-dados"
          :pagination="paginacao"
          :rows="tags"
          :columns="grid"
          row-key="name"
        />
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
import { PaginacaoGrid } from 'src/shared/grids/paginacao.grid';
import { TagResponse } from 'src/api/tags/responses/tag.response';

export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const formulario = ref(new ListarTagFiltroFormulario({}));
    const grid = ListarTagGrid;
    const paginacao = ref(new PaginacaoGrid({}));
    const tags = ref<TagResponse[]>([]);

    const pesquisar = async () => {
      const tagService = new TagService();
      const request = formulario.value.gerarRequest(paginacao.value);
      return await tagService.listar(request);
    };

    onMounted(async () => {
      const resposta = await pesquisar();
      tags.value = resposta.content;
    });

    return {
      listarTagsBreadcrump,
      formulario,
      grid,
      paginacao,
      pesquisar,
      tags,
    };
  },
});
</script>
