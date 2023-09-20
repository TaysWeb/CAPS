<template>
  <navComp/>
  <router-view/>
  <FooterComp/>
</template>

<script>
import navComp from '@/components/navbar-Comp.vue'
import FooterComp from './components/footer-Comp.vue'
export default {
  components: {
    navComp,
    FooterComp
}
}
</script>
<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #F6F4F4 !important;
  background: var(--background);
}
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background: scroll;
} 
::-webkit-scrollbar {
    display: none;
}
:root {
--text: #F6F4F4;
--background: #030202;
--primary: #60716D  ;
--secondary: #DED9DB;
--accent: #1ED29C;
}
 body {  
  overflow-x: hidden;
} 
li {
list-style:none;
}
</style>
