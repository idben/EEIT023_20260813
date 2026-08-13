<script setup>
import { RouterView } from 'vue-router'
import NavBar from './components/NavBar.vue';
</script>

<template>
  <div class="container py-3">
    <NavBar />
    <div class="card card-body">
      <RouterView />
    </div>
  </div>
</template>

<style scoped></style>