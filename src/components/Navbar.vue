<template>
  <nav class="navbar px-0">
    <div class="navbar-brand mx-0">
        <router-link to="/" class="navbar-item me-0">
          <font-awesome-icon icon="fa-solid fa-house"></font-awesome-icon>
          Home
        </router-link>
    </div>
    <div class="navbar-menu d-flex flex-row align-items-stretch">
        <router-link to="/component" class="navbar-item">
          <font-awesome-icon icon="fa-solid fa-box"></font-awesome-icon> 
          My fridge</router-link>
        <router-link to="/shopping" class="navbar-item">
          <font-awesome-icon icon="fa-solid fa-cart-shopping"></font-awesome-icon> 
          Shopping
        </router-link>
        <router-link to="/statistics" class="navbar-item">
          <font-awesome-icon icon="fa-solid fa-chart-simple"></font-awesome-icon>
          Stats
        </router-link>
        <router-link to="/mongodb" class="navbar-item">
          <font-awesome-icon icon="fa-solid fa-database"></font-awesome-icon>  
          MongoDB
        </router-link>
    </div>
  </nav>
</template>

<script lang="ts">
export default {
  name: "NavBar",
};
</script>

<style scoped>
.navbar {
  background-color: #efeaea;
  color: white;
  border-radius: 10px;
  padding: 0%;
  margin-bottom: 1em;  
  width:auto;
}

.navbar-item {
  color: rgb(34, 213, 112);
  text-decoration: none;
  margin: 0;
}

router-link:hover {
    border-radius: 10px;
}
.router-link-active {
  color: rgb(34, 213, 112);
  transition: all 1.5s;
  text-decoration: none;
  background-color: navy;
  border-radius: 10px;
}
font-awesome-icon {
  color: rgb(34, 213, 112);
}
</style>
