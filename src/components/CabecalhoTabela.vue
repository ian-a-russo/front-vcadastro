<template>
  <thead class="is-th-color has-text-weight-bold" v-if="items.length > 0">
    <tr>
      <th class="is-capitalized">Nome</th>
      <th class="is-capitalized">Email</th>
      <th class="is-capitalized">Telefone</th>
      <th>Ações</th>
    </tr>
  </thead>
</template>

<script setup lang="ts">
import ICadastro from "@/interfaces/ICadastro";
import { defineProps } from "vue";

const props = defineProps({
  items: {
    type: Array as () => ICadastro[],
    required: true,
  },
});
</script>
