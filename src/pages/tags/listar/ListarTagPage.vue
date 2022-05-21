<template>
  <q-page class="column items-center">
    <q-breadcrumbs class="breadcrumb">
      <q-breadcrumbs-el label="Início" icon="home" />
      <q-breadcrumbs-el label="Tags" icon="label" />
      <q-breadcrumbs-el label="Listar" />
    </q-breadcrumbs>

    <q-card flat bordered class="card-filtro mt-2">
      <q-card-section>
        <div class="text-h6">Filtros</div>
      </q-card-section>

      <q-card-section class="q-pt-none"> </q-card-section>

      <q-separator inset />

      <q-card-section class="q-pt-none row justify-end">
        <q-btn no-caps color="secondary" label="Limpar campos"></q-btn>
        <q-btn class="ml-1" no-caps color="primary" label="Pesquisar"></q-btn>
      </q-card-section>
    </q-card>
  </q-page>
</template>
