<template>
  <div v-if="Movies">
   <movieComp :Movies="Movies"/>
  </div>
  <div v-else>Just a moment ...</div>
</template>

<script>
import movieComp from '@/components/movie-comp.vue';


export default {
  name: 'HomeView',
  components: {
    movieComp
  },
  computed: {
      Movies() {
            return this.$store.state.Movies
        },
    },
    mounted() {
      
        return this.$store.dispatch('fetchMovies');

    },
}
</script>
