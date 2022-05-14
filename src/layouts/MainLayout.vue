<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleMenuDrawer"
        />

        <q-toolbar-title> Cheffon</q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="drawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header>Menu</q-item-label>

        <MenuItem
          v-for="link in configuracoesMenu"
          :key="link.titulo"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import MenuItem from 'src/components/MenuItem.vue';

const configuracoesMenu = [
  {
    titulo: 'Início',
    legenda: 'Tela inicial',
    icone: 'home',
    link: '/',
  },
  {
    titulo: 'Tags',
    legenda: 'Tags das receitas',
    icone: 'label',
    link: '/tags',
  },
];

export default defineComponent({
  name: 'MainLayout',

  components: {
    MenuItem,
  },

  setup() {
    const drawerOpen = ref(false);

    return {
      configuracoesMenu,
      drawerOpen,
      toggleMenuDrawer() {
        drawerOpen.value = !drawerOpen.value;
      },
    };
  },
});
</script>
