<template>
  <div class="overlay">
    <header>
      <h1 class="text">Adicionar</h1>
      <AdicionarUsuario />
    </header>
  </div>
</template>

<script setup lang="ts">
import AdicionarUsuario from "./AdicionarUsuario.vue";
</script>

<style scoped>
header {
  padding: 1rem;
  position: absolute;
  background-image: linear-gradient(#0b776c, #33e2e5);
  width: 25rem;
  height: 60%;
  border-radius: 10px;
  left: 40%;
  top: 17%;
}
@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
.text {
  text-align: center;
  font-size: 3rem;
  font-family: cursive;
  color: rgb(92, 211, 158);
  -webkit-text-stroke-width: 2px;
  margin-bottom: 50px;
}
.div {
  text-align: center;
  margin-top: 20px;
}
.back {
  top: 0;
}
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}
</style>
