<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <navComp/>
  <router-view/>
</template>

<script>
import navComp from '@/components/navbar-Comp.vue'
export default {
  components: {
    navComp
  }
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F6F4F4;
  background: #030202;
}

</style>
