<script setup lang="ts">
import { RouterView } from "vue-router";
import NavBar from "./components/Navbar.vue";
</script>

<template>
  <header>
   <NavBar />
  </header>
  <main>
    <RouterView />
  </main>
</template>