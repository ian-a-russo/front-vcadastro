import ModalEdicao from "@/components/ModalEdicao.vue";
import ModalAdicao from "@/components/ModalAdicao.vue";
import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw[] = [
  {
    path: "/users/:id",
    name: "ModalEdicao",
    component: ModalEdicao,
    props: true,
  },
  {
    path: "/new-user/",
    name: "ModalAdicao",
    component: ModalAdicao,
    props: true,
  },
];

const roteador = createRouter({
  history: createWebHistory(),
  routes: rotas,
});

export default roteador;
