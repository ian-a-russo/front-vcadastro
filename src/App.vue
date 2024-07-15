<template>
  <main>
    <router-view></router-view>
    <BotaoCriar />
    <BarraLateral />
    <TabelaCadastro />
  </main>
</template>

<script setup lang="ts">
import BotaoCriar from "@/components/BotaoCriar.vue";
import BarraLateral from "./components/BarraLateral.vue";
import TabelaCadastro from "./components/TabelaCadastro.vue";
</script>
