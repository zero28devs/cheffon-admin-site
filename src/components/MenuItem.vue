<template>
  <q-item clickable tag="a" :href="link">
    <q-item-section v-if="icone" avatar>
      <q-icon color="primary" :name="icone" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ titulo }}</q-item-label>
      <q-item-label caption>{{ legenda }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MenuItem',
  props: {
    titulo: {
      type: String,
      required: true,
    },

    legenda: {
      type: String,
      default: '',
    },

    link: {
      type: String,
      default: '#',
    },

    icone: {
      type: String,
      default: '',
    },
  },
});
</script>
