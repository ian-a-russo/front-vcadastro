<template>
  <router-link to="/"
    ><button class="button" @click="confirmarAdicao">
      Confirmar
    </button></router-link
  >
</template>

<script setup lang="ts">
import INovoCadastro from "@/interfaces/INovoCadastro";
import { defineProps } from "vue";
import { addUser } from "@/http";

const props = defineProps({
  novoUsuario: {
    type: Object as () => INovoCadastro,
    required: true,
  },
});

console.log(props.novoUsuario);

async function confirmarAdicao() {
  await addUser(
    props.novoUsuario.nome,
    props.novoUsuario.email,
    props.novoUsuario.telefone
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
