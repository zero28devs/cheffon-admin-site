<template>
  <q-separator inset />
  <q-card-section class="q-pt-none row justify-end">
    <div class="botoes-filtro">
      <q-btn
        no-caps
        color="dark"
        label="Limpar campos"
        @click="limparCampos"
      ></q-btn>
      <q-btn
        class="botao-pesquisar"
        no-caps
        color="primary"
        label="Pesquisar"
        @click="pesquisar()"
      ></q-btn>
    </div>
  </q-card-section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'BotoesFiltro',
  emits: ['pesquisar', 'limparCampos'],
  setup(props, ctx) {
    const pesquisar = () => ctx.emit('pesquisar');
    const limparCampos = () => ctx.emit('limparCampos');
    return { pesquisar, limparCampos };
  },
});
</script>

<style>
</style>
