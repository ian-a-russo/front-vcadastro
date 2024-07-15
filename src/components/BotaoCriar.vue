<template>
  <router-link :to="{ path: `new-user/` }">
    <button class="button">Adicionar</button>
  </router-link>
</template>

<style scoped>
.button {
  left: 80rem;
  top: 15rem;
  background-color: rgb(49, 196, 166);
}
.button:active {
  box-shadow: 0 10px 10px rgba(117, 117, 117, 0.2);
  transform: scale(0.98);
  background-color: rgb(34, 149, 126);
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
