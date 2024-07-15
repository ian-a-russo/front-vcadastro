<template>
  <tbody>
    <tr
      class="is-tb-color"
      v-for="(item, index) in items"
      :key="item.id"
      :data-index="index"
    >
      <td>{{ item.nome }}</td>
      <td>{{ item.email }}</td>
      <td>{{ item.telefone }}</td>
      <td>
        <router-link
          class="fa-solid fa-pencil editar"
          @click="abrirEditar(item.id)"
          :to="{ path: `users/${item.id}` }"
        ></router-link>
        <i class="fa-solid fa-trash apagar" @click="deletarLinha(item.id)"></i>
      </td>
    </tr>
  </tbody>
</template>

<script setup lang="ts">
import { defineEmits, defineProps } from "vue";
import ICadastro from "@/interfaces/ICadastro";

const props = defineProps({
  items: {
    type: Array as () => ICadastro[],
    required: true,
  },
});

const emit = defineEmits(["AoAbrirEditar", "AoDeletarLinha"]);

function deletarLinha(id: number) {
  emit("AoDeletarLinha", id);
}
function abrirEditar(id: number) {
  emit("AoAbrirEditar", id);
}
</script>

<style scoped>
.fa-solid {
  color: black;
}
.editar,
.apagar {
  cursor: pointer;
  transition: color 0.2s ease-out, transform 0.2s ease;
}
.apagar {
  margin-left: 20px;
}

.editar:hover,
.apagar:hover {
  color: rgb(61, 155, 131);
  transform: scale(1.3);
}

.editar:active,
.apagar:active {
  color: rgb(25, 69, 58);
  transform: scale(0.95);
}
</style>
