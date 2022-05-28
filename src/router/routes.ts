import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('src/pages/default/IndexPage.vue') },
    ],
  },
  {
    path: '/tags',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('src/pages/tags/listar/ListarTagPage.vue'),
      },
      {
        path: 'editar',
        component: () => import('src/pages/tags/listar/EditarTagPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('src/pages/default/NotFoundPage.vue'),
  },
];

export default routes;
