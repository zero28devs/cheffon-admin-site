<template>
  <q-breadcrumbs class="breadcrumb text-primary">
    <q-breadcrumbs-el
      v-for="item in itens"
      :key="item.nome"
      :label="item.nome"
      :icon="item.icone"
      :to="item.link"
    />
  </q-breadcrumbs>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { BreadcumpItem } from 'src/components/types/breadcump-item';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    itens: {
      required: true,
      type: Array as PropType<BreadcumpItem[]>,
    },
  },
});
</script>

<style>
</style>
