<script setup lang="ts">
import { ref } from "vue";
import { v4 as uuid } from "uuid";

const name = ref("");

function addToDB() {
  const item = {
    id: uuid(),
    name: name.value
  };
  name.value = "";
}


</script>


<template>
  <main>
    <div>
      <input v-model="name" class="me-2" type="text">
      <button @click="addToDB">Add item to database</button>
    </div>
  </main>
</template>