<template>
  <div class="level-item is-mid">
    <table class="table is-striped is-table-size">
      <CabecalhoTabela :items="items" />
      <ConteudoTabela
        class="is-tb-color"
        :items="items"
        @AoDeletarLinha="deletarUsuario"
      />
    </table>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, defineEmits, watch } from "vue";
import { onBeforeRouteUpdate, useRoute } from "vue-router";
import { getUsers, deleteUser } from "@/http";
import ICadastro from "@/interfaces/ICadastro";
import CabecalhoTabela from "./CabecalhoTabela.vue";
import ConteudoTabela from "./ConteudoTabela.vue";

const route = useRoute();
const items = ref<ICadastro[]>([]);

const emit = defineEmits(["AoPropagarAbrirEditar"]);

async function deletarUsuario(id: number) {
  await deleteUser(id);
  await carregarUsuarios();
}

async function carregarUsuarios() {
  try {
    items.value = await getUsers();
  } catch (error) {
    console.error("Erro ao obter usuários:", error);
  }
}

onMounted(carregarUsuarios);

onBeforeRouteUpdate(async (to, from, next) => {
  await carregarUsuarios();
  next();
});

watch(
  () => route.fullPath,
  async () => {
    await carregarUsuarios();
  }
);
</script>

<style scoped>
@media only screen and (max-width: 768px) {
  .is-mid {
    display: flex;
    position: relative;
    top: 150px;
    font-size: 12px;
  }
}

.is-mid {
  display: flex;
  position: absolute;
  top: 300px;
  font-size: 20px;
  width: 100%;
  align-items: center;
  justify-content: center;
}

.is-table-size {
  width: 50%;
}

.is-tb-color {
  background-color: rgb(243, 243, 243);
  border-bottom: 0.3px solid rgba(128, 128, 128, 0.469);
}

.is-th-color {
  background-color: darkcyan;
}
</style>
