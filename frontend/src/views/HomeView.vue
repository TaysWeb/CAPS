<template>
  <div class="container">
    <!-- Search  -->
    <div class="container text-white group py-3 ">
   
  <svg class="icon" aria-hidden="true" viewBox="0 0 24 24"><g><path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path></g></svg>
  <input placeholder="Search for a Movie"  v-model="search"  class="input" @keyup="fetchMovies">

  </div>
   <!-- Movies Display -->
    <div v-if="Movies">
    <div v-for="movie in Movies" :key="movie.MovieID" :Movies="Movies"> 	      
    <div class="container" >
        <div class="movies ">
          <img :src="movie.image" :alt="movie.Title" width="600">
        </div>                                                                                                         
      </div>
    </div>
    </div>
    <!--End of movies display -->
  <div v-else><SpinnerComp/></div>
</div>      

</template>

<script>

import SpinnerComp from '@/components/spinner-Comp.vue';


export default {
  name: 'HomeView',
  components: {
    SpinnerComp
  },    
  data() {
        return {

            search: ""
        }
    },
  computed:{
            Movies() {
                return this.$store.state.Movies
            }
        },
        mounted() {
            this.$store.dispatch('fetchMovies')
        },
        methods: {
    fetchMovies() {
      fetch("https://caps-7.onrender.com/getAll").then(response => response.json())
        .then(res => {
          if (this.search) {
            this.Movies = res.results.filters(Movies => Movies.Title.toLowerCase().includes(this.search.toLowerCase())
            );
          } else {
            this.Movies = res.results;
          }
        });
    }
  },
  created() {
    this.fetchMovies();
  }

}
</script>
<style scoped>
/* form{
  width:52rem ;
  height: 3rem ;
  margin-left: 20% ;
}
input {
  background: var(--primary) !important;
}
input::placeholder {
 color: var(--text);

} */
.group {
 display: flex;
 line-height: 70px;
 margin-left:20%;
 position: relative;
}

.input {
 width: 52rem;
 height: 4rem;
 /* line-height: 3rem; */
 padding: 0 1rem;
 padding-left: 2.5rem;
 border: 2px solid transparent;
 border-radius: 8px;
 outline: none;
 background-color: #60716D;
 color: #f6f4f4;
 transition: .3s ease;
}

.input::placeholder {
  color: var(--text);
  font-size:30px;
}

.input:focus, input:hover {
 outline: none;
 border-color: rgba(234,76,137,0.4);
 background-color: #646464;
 box-shadow: 0 0 0 4px rgba(211, 199, 203, 0.1);
}
.icon {
 position: absolute;
 left: 1rem;
 right:1rem;
 bottom:2rem;
 width: 2.4rem;
 height: 2.2rem;
}
.movies{
    width: 200px !important;
    height: 300px !important ;
    transform: rotateY(-30deg);    
    transform-style: preserve-3d;
    position: relative;
    transition: transform 1s ease;
    animation: 1s ease 0s 1 initAnimation;
    margin-bottom: 8% !important;
}
.movies-container {
    border: 1px solid lightgray;
    width: 500px;
    height: 400px;
    transform-style: preserve-3d;
    perspective: 400px;
}
.movies:hover {
    transform: rotate(0deg);
}

@keyframes initAnimation {
    0% {
        transform: rotateY(0deg)
    }

    100% {
        transform: rotateY(-30deg);
    }
}

.movies> :first-child {
    position: absolute;
    background: #0d47a1aa;
    width: 200px !important;
    height: 300px !important; 
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.movies::before {
    position: absolute;
    /* content: ''; */
    background: #bf360caa;
    height: calc(300px - 2 * 3px);
    top: 3px;
    width: 50px;
    transform: translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2));
}

.movies::after {
    /* content: ''; */
    position: absolute;
    left: 0;
    width: 200px !important;
    height: 300px !important;
    /* background: #1b5e20aa !important; */
    transform: translateZ(-50px);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: -10px 0 50px 10px #666;
}
</style>
