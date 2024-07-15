<template>
  <div>
    <label for="nome">Nome:</label>
    <input
      id="nome"
      class="input is-focused"
      type="text"
      v-model="form.nome"
    /><br />
    <small id="nameHelp" class="small"
      >Seu nome sem caracteres especiais (Ex: @, -, $...)</small
    >
  </div>
  <div>
    <label for="email">Email:</label>
    <input
      id="email"
      class="input is-focused"
      type="text"
      v-model="form.email"
    /><br />
    <small id="emailHelp" class="form-text text-muted"
      >Nós nunca iremos compartilhar seu e-mail com ninguém.</small
    >
  </div>
  <div>
    <label for="telefone">Telefone:</label>
    <input
      id="telefone"
      class="input is-focused"
      type="text"
      v-model="form.telefone"
    />
    <small id="numberHelp" class="form-text text-muted"
      >Siga o seguinte padrão: (DDD) 9$$$$-$$$$</small
    >
  </div>
  <div class="div">
    <BotaoConfirmar
      :novoUsuario="{
        nome: form.nome,
        email: form.email,
        telefone: form.telefone,
      }"
    />
    <BotaoCancelar />
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import BotaoCancelar from "./BotaoCancelar.vue";
import BotaoConfirmar from "./BotaoConfirmar.vue";
import INovoCadastro from "@/interfaces/INovoCadastro";

const form = ref<INovoCadastro>({
  nome: "",
  email: "",
  telefone: "",
});
</script>

<style scoped>
.is-focused {
  width: 40rem;
  height: 3rem;
  font-size: 1.3rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.is-focused:focus {
  box-shadow: 0 10px 10px rgba(0, 0, 0, 0.2);
  transform: scale(1.02);
}
label {
  font-size: 1.25rem;
  font-family: Arial, Helvetica, sans-serif;
  color: rgb(0, 0, 0);
  -webkit-text-stroke-width: 0.5px;
}
</style>
