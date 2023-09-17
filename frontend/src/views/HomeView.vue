<template>
  <div v-if="Movies">
   <movieComp :Movies="Movies"/>
  </div>
  <div v-else>
  <SpinnerComp/>
</div>
</template>

<script>
import movieComp from '@/components/movie-comp.vue';
import SpinnerComp from '@/components/spinner-Comp.vue';


export default {
  name: 'HomeView',
  components: {
    movieComp,
    SpinnerComp
}
}
</script>
