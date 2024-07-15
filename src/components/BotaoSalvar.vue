<template>
  <router-link to="/"
    ><button class="button" @click="confirmarAlteracoes">
      Salvar Alterações
    </button></router-link
  >
</template>

<script setup lang="ts">
import ICadastroEditado from "@/interfaces/ICadastroEditado";
import { defineProps } from "vue";
import { editUser } from "@/http";
const props = defineProps({
  alteracoes: {
    type: Object as () => ICadastroEditado,
    required: true,
  },
  id: {
    type: Number,
    default: null,
  },
});

console.log(props.id);

console.log(props.alteracoes);

async function confirmarAlteracoes() {
  await editUser(
    props.alteracoes.nome,
    props.alteracoes.email,
    props.alteracoes.telefone,
    props.id
  );
}
</script>

<style scoped>
.button:active {
  box-shadow: 0 10px 10px rgba(117, 117, 117, 0.2);
  transform: scale(0.98);
  background-color: rgb(176, 176, 176);
}

.button:hover {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}

.button {
  transition: background-color 0.2s ease-out, transform 0.2s ease;
  position: relative;
  margin: 10px;
}
</style>
