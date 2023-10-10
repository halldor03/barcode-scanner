<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/component">Component test</RouterLink>
      <RouterLink to="/mongodb">MongoDB test</RouterLink>
    </nav>
  </header>
  <main>
    <RouterView />
  </main>
</template>