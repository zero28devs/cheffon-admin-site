<template>
  <q-page class="column items-center">
    <breadcrumb :itens="breadcrumpItens"></breadcrumb>
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
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue';
import Breadcrumb from 'src/components/Breadcrumb.vue';
import { breadcrumpItens } from 'src/pages/tags/listar/listar-tag.breadcrump';
import { ListarFiltroFormulario } from 'src/pages/tags/listar/formularios/listar-filtro.formulario';
import { TagService } from 'src/api/tags/services/tag.service';

export default defineComponent({
  components: {
    Breadcrumb,
  },
  setup() {
    const formulario = reactive(new ListarFiltroFormulario({}));

    const pesquisar = async () => {
      const tagService = new TagService();
      const request = formulario.gerarRequest();
      tagService.listar(request);
    };

    return { breadcrumpItens, formulario, pesquisar };
  },
});
</script>
