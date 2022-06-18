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
      <botoes-filtro @pesquisar="pesquisar" @limparCampos="limparFormulario" />
    </q-card>
    <q-card flat bordered class="card-dados mt-2">
      <q-card-section>
        <div class="text-h6 text-dark">Tags</div>
        <div class="botoes-acoes">
          <q-btn
            @click="navegarParaCadastro"
            no-caps
            color="primary"
            label="Cadastrar"
          ></q-btn>
          <q-btn
            v-if="registroSelecionado"
            @click="navegarParaEdicao"
            no-caps
            color="secondary"
            label="Editar"
          ></q-btn>
          <q-btn
            v-if="registroSelecionado"
            @click="excluir"
            no-caps
            color="negative"
            label="Remover"
          ></q-btn>
        </div>
        <div class="tabela-dados">
          <q-table
            @request="pesquisar"
            v-model:selected="itemSelecionado"
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
import { defineComponent, onMounted, ref } from 'vue';
import router from 'src/router';
import Breadcrumb from 'src/components/Breadcrumb.vue';
import BotoesFiltro from 'src/components/BotoesFiltro.vue';
import { TagService } from 'src/api/tags/services/tag.service';
import { listarTagsBreadcrump } from 'src/pages/tags/listar/listar-tag.breadcrump';
import { ListarTagFiltroFormulario } from 'src/pages/tags/listar/formularios/listar-tag-filtro.formulario';
import { ListarTagGrid } from 'src/pages/tags/listar/grids/listar-tag.grid';
import { TagResponse } from 'src/api/tags/responses/tag.response';
import { PaginacaoTabelaGrid } from 'src/shared/grids/paginacao-tabela.grid';
import {
  loading,
  alternarLoading,
} from 'src/shared/functions/loading.functions';
import {
  atualizarDadosPaginacao,
  paginacaoGrid,
  itemSelecionado,
  registroSelecionado,
} from 'src/shared/functions/tabela.functions';
import { NotificacaoService } from 'src/shared/utils/notificacao.service';

export default defineComponent({
  components: {
    Breadcrumb,
    BotoesFiltro,
  },
  setup() {
    const formulario = ref(new ListarTagFiltroFormulario({}));
    const grid = ListarTagGrid;
    const tags = ref<TagResponse[]>([]);
    const tagService = new TagService();
    const notificacaoService = new NotificacaoService();

    const limparFormulario = () =>
      (formulario.value = new ListarTagFiltroFormulario({}));

    const pesquisar = async (paginacaoTabela = PaginacaoTabelaGrid) => {
      alternarLoading();
      const request = formulario.value.gerarRequest(paginacaoTabela.pagination);
      const resposta = await tagService.listar(request);
      tags.value = resposta.content;
      atualizarDadosPaginacao(resposta);
      alternarLoading();
    };

    const navegarParaCadastro = () => router.push('/tags/cadastrar');

    const navegarParaEdicao = () => {
      const tagEdicao = itemSelecionado.value[0] as TagResponse;
      router.push(`/tags/editar/${tagEdicao.id}`);
    };

    const excluir = async () => {
      const tagExclusao = itemSelecionado.value[0] as TagResponse;
      await tagService.excluir(tagExclusao.id);
      notificacaoService.sucesso('Tag removida com sucesso');
      await pesquisar();
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
      tags,
      itemSelecionado,
      registroSelecionado,
      limparFormulario,
      pesquisar,
      navegarParaCadastro,
      navegarParaEdicao,
      excluir,
    };
  },
});
</script>
