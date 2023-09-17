<template>
    
    <div class="container" v-for="mov in Movie" :key="mov.MovieID">
        <div class="book">
            <img :src="mov.image" :alt="mov.Title">
    </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          1111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111111````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
</div>
</template>
<script>
export default {
  props:['movie']

}
</script>
<style scoped >
    .book-container {
    border: 1px solid lightgray;
    width: 500px;
    height: 400px;
    /* display: flex;
    align-items: center;
    justify-content: center; */
    transform-style: preserve-3d;
    perspective: 400px;
}

.book {
    width: 200px !important;
    height: 300px !important ;
    transform: rotateY(-30deg);
    transform-style: preserve-3d;
    position: relative;
    transition: transform 1s ease;
    animation: 1s ease 0s 1 initAnimation;
}

.book:hover {
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

.book> :first-child {
    position: absolute;
    background: #0d47a1aa;
    width: 200px !important;
    height: 300px !important; 
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}

.book::before {
    position: absolute;
    content: '';
    background: #bf360caa;
    height: calc(300px - 2 * 3px);
    top: 3px;
    width: 50px;
    transform: translateX(calc(200px - 50px / 2 - 3px)) rotateY(90deg) translateX(calc(50px / 2));
}

.book::after {
    content: '';
    position: absolute;
    left: 0;
    width: 200px !important;
    height: 300px !important;
    background: #1b5e20aa !important;
    transform: translateZ(-50px);
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    box-shadow: -10px 0 50px 10px #666;
}
</style>